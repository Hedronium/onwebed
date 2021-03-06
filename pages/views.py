from django.shortcuts import render, redirect, get_object_or_404
from django.contrib import messages
from .models import Page
from onwebed import core
from django.contrib.auth.decorators import login_required
from django.template.exceptions import TemplateDoesNotExist
from django.http import HttpResponse

# Create your views here.

@login_required()
def index(request):
	return render(request, "pages/index.html")


@login_required
def list(request):
	context = {
		'user': request.user,
		'pages': Page.objects.all(),
	}

	return render(request, "pages/list.html", context)


@login_required
def create(request):
	if request.method == "POST":
		title = request.POST['title']
		name = request.POST['name']

		Page.objects.create(title = title, name = name)

		messages.success(request, 'Page created successfully!')

		return redirect("pages:list")

	return render(request, "pages/create.html")


@login_required
def settings(request):
	from onwebed.models import SiteAttribute

	default_page_site_attribute = SiteAttribute.objects.get(key = "default_page")

	if request.method == "POST":
		default_page = request.POST['default_page']

		default_page_site_attribute.value = default_page
		default_page_site_attribute.save()

		messages.success(request, 'Settings updated successfully!')

	context = {
		'default_page': int(default_page_site_attribute.value),
		'pages': Page.objects.exclude(name__istartswith = "_")
	}

	return render(request, "pages/settings.html", context)


@login_required
def edit(request, page_id):
	page = get_object_or_404(Page, pk = page_id)

	if request.method == "POST":
		page.content = request.POST["content"]
		page.name = request.POST["name"]
		page.title = request.POST["title"]
		page.html_content = core.unescape(request.POST["template_content"])
		page.save()

		# expire all page caches
		Page.objects.all().update(is_cached = False)

		# write the template file
		core.cache_page(page.name, page.html_content)

	context = {
		'page': page
	}

	return render(request, "pages/edit.html", context)


@login_required
def delete(request, page_id):
	if request.method == "POST":
		page = get_object_or_404(Page, pk = page_id)
		page.delete()

		messages.success(request, 'Page deleted successfully!')
		return redirect("pages:list")

	context = {
		'page': get_object_or_404(Page, pk = page_id)
	}

	return render(request, "pages/delete.html", context)


# Procedure created just for reducing redundancy

def detail_base(request, page):
	context = {
		'page': page
	}

	if page.name[0] == "_":
		return HttpResponse("Page not found.")

	else:
		if not page.is_cached:
			core.cache_page(page.name, page.html_content)

		try:
			return render(request, "pages/cached/" + page.name + ".html", context)
		except TemplateDoesNotExist:
			core.cache_page(page.name, page.html_content)
			return render(request, "pages/cached/" + page.name + ".html", context)


def detail(request, page_id):
	page = get_object_or_404(Page, pk = page_id)

	return detail_base(request, page)



def detail_by_name(request, page_name):
	page = get_object_or_404(Page, name = page_name)

	return detail_base(request, page)
		

def default_page(request):
	from onwebed.models import SiteAttribute

	default_page_filter = SiteAttribute.objects.filter(key = "default_page")

	if default_page_filter.exists():
		default_page_id = int(default_page_filter.first().value)
	else:
		default_page_id = Page.objects.first().id

	return detail(request, default_page_id)