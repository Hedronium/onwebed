(function(scope){
'use strict';

function F(arity, fun, wrapper) {
  wrapper.a = arity;
  wrapper.f = fun;
  return wrapper;
}

function F2(fun) {
  return F(2, fun, function(a) { return function(b) { return fun(a,b); }; })
}
function F3(fun) {
  return F(3, fun, function(a) {
    return function(b) { return function(c) { return fun(a, b, c); }; };
  });
}
function F4(fun) {
  return F(4, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return fun(a, b, c, d); }; }; };
  });
}
function F5(fun) {
  return F(5, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return fun(a, b, c, d, e); }; }; }; };
  });
}
function F6(fun) {
  return F(6, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return fun(a, b, c, d, e, f); }; }; }; }; };
  });
}
function F7(fun) {
  return F(7, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return fun(a, b, c, d, e, f, g); }; }; }; }; }; };
  });
}
function F8(fun) {
  return F(8, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) {
    return fun(a, b, c, d, e, f, g, h); }; }; }; }; }; }; };
  });
}
function F9(fun) {
  return F(9, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) { return function(i) {
    return fun(a, b, c, d, e, f, g, h, i); }; }; }; }; }; }; }; };
  });
}

function A2(fun, a, b) {
  return fun.a === 2 ? fun.f(a, b) : fun(a)(b);
}
function A3(fun, a, b, c) {
  return fun.a === 3 ? fun.f(a, b, c) : fun(a)(b)(c);
}
function A4(fun, a, b, c, d) {
  return fun.a === 4 ? fun.f(a, b, c, d) : fun(a)(b)(c)(d);
}
function A5(fun, a, b, c, d, e) {
  return fun.a === 5 ? fun.f(a, b, c, d, e) : fun(a)(b)(c)(d)(e);
}
function A6(fun, a, b, c, d, e, f) {
  return fun.a === 6 ? fun.f(a, b, c, d, e, f) : fun(a)(b)(c)(d)(e)(f);
}
function A7(fun, a, b, c, d, e, f, g) {
  return fun.a === 7 ? fun.f(a, b, c, d, e, f, g) : fun(a)(b)(c)(d)(e)(f)(g);
}
function A8(fun, a, b, c, d, e, f, g, h) {
  return fun.a === 8 ? fun.f(a, b, c, d, e, f, g, h) : fun(a)(b)(c)(d)(e)(f)(g)(h);
}
function A9(fun, a, b, c, d, e, f, g, h, i) {
  return fun.a === 9 ? fun.f(a, b, c, d, e, f, g, h, i) : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
}

console.warn('Compiled in DEV mode. Follow the advice at https://elm-lang.org/0.19.0/optimize for better performance and smaller assets.');


var _JsArray_empty = [];

function _JsArray_singleton(value)
{
    return [value];
}

function _JsArray_length(array)
{
    return array.length;
}

var _JsArray_initialize = F3(function(size, offset, func)
{
    var result = new Array(size);

    for (var i = 0; i < size; i++)
    {
        result[i] = func(offset + i);
    }

    return result;
});

var _JsArray_initializeFromList = F2(function (max, ls)
{
    var result = new Array(max);

    for (var i = 0; i < max && ls.b; i++)
    {
        result[i] = ls.a;
        ls = ls.b;
    }

    result.length = i;
    return _Utils_Tuple2(result, ls);
});

var _JsArray_unsafeGet = F2(function(index, array)
{
    return array[index];
});

var _JsArray_unsafeSet = F3(function(index, value, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[index] = value;
    return result;
});

var _JsArray_push = F2(function(value, array)
{
    var length = array.length;
    var result = new Array(length + 1);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[length] = value;
    return result;
});

var _JsArray_foldl = F3(function(func, acc, array)
{
    var length = array.length;

    for (var i = 0; i < length; i++)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_foldr = F3(function(func, acc, array)
{
    for (var i = array.length - 1; i >= 0; i--)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_map = F2(function(func, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = func(array[i]);
    }

    return result;
});

var _JsArray_indexedMap = F3(function(func, offset, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = A2(func, offset + i, array[i]);
    }

    return result;
});

var _JsArray_slice = F3(function(from, to, array)
{
    return array.slice(from, to);
});

var _JsArray_appendN = F3(function(n, dest, source)
{
    var destLen = dest.length;
    var itemsToCopy = n - destLen;

    if (itemsToCopy > source.length)
    {
        itemsToCopy = source.length;
    }

    var size = destLen + itemsToCopy;
    var result = new Array(size);

    for (var i = 0; i < destLen; i++)
    {
        result[i] = dest[i];
    }

    for (var i = 0; i < itemsToCopy; i++)
    {
        result[i + destLen] = source[i];
    }

    return result;
});



// LOG

var _Debug_log_UNUSED = F2(function(tag, value)
{
	return value;
});

var _Debug_log = F2(function(tag, value)
{
	console.log(tag + ': ' + _Debug_toString(value));
	return value;
});


// TODOS

function _Debug_todo(moduleName, region)
{
	return function(message) {
		_Debug_crash(8, moduleName, region, message);
	};
}

function _Debug_todoCase(moduleName, region, value)
{
	return function(message) {
		_Debug_crash(9, moduleName, region, value, message);
	};
}


// TO STRING

function _Debug_toString_UNUSED(value)
{
	return '<internals>';
}

function _Debug_toString(value)
{
	return _Debug_toAnsiString(false, value);
}

function _Debug_toAnsiString(ansi, value)
{
	if (typeof value === 'function')
	{
		return _Debug_internalColor(ansi, '<function>');
	}

	if (typeof value === 'boolean')
	{
		return _Debug_ctorColor(ansi, value ? 'True' : 'False');
	}

	if (typeof value === 'number')
	{
		return _Debug_numberColor(ansi, value + '');
	}

	if (value instanceof String)
	{
		return _Debug_charColor(ansi, "'" + _Debug_addSlashes(value, true) + "'");
	}

	if (typeof value === 'string')
	{
		return _Debug_stringColor(ansi, '"' + _Debug_addSlashes(value, false) + '"');
	}

	if (typeof value === 'object' && '$' in value)
	{
		var tag = value.$;

		if (typeof tag === 'number')
		{
			return _Debug_internalColor(ansi, '<internals>');
		}

		if (tag[0] === '#')
		{
			var output = [];
			for (var k in value)
			{
				if (k === '$') continue;
				output.push(_Debug_toAnsiString(ansi, value[k]));
			}
			return '(' + output.join(',') + ')';
		}

		if (tag === 'Set_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Set')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, elm$core$Set$toList(value));
		}

		if (tag === 'RBNode_elm_builtin' || tag === 'RBEmpty_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Dict')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, elm$core$Dict$toList(value));
		}

		if (tag === 'Array_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Array')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, elm$core$Array$toList(value));
		}

		if (tag === '::' || tag === '[]')
		{
			var output = '[';

			value.b && (output += _Debug_toAnsiString(ansi, value.a), value = value.b)

			for (; value.b; value = value.b) // WHILE_CONS
			{
				output += ',' + _Debug_toAnsiString(ansi, value.a);
			}
			return output + ']';
		}

		var output = '';
		for (var i in value)
		{
			if (i === '$') continue;
			var str = _Debug_toAnsiString(ansi, value[i]);
			var c0 = str[0];
			var parenless = c0 === '{' || c0 === '(' || c0 === '[' || c0 === '<' || c0 === '"' || str.indexOf(' ') < 0;
			output += ' ' + (parenless ? str : '(' + str + ')');
		}
		return _Debug_ctorColor(ansi, tag) + output;
	}

	if (typeof value === 'object')
	{
		var output = [];
		for (var key in value)
		{
			var field = key[0] === '_' ? key.slice(1) : key;
			output.push(_Debug_fadeColor(ansi, field) + ' = ' + _Debug_toAnsiString(ansi, value[key]));
		}
		if (output.length === 0)
		{
			return '{}';
		}
		return '{ ' + output.join(', ') + ' }';
	}

	return _Debug_internalColor(ansi, '<internals>');
}

function _Debug_addSlashes(str, isChar)
{
	var s = str
		.replace(/\\/g, '\\\\')
		.replace(/\n/g, '\\n')
		.replace(/\t/g, '\\t')
		.replace(/\r/g, '\\r')
		.replace(/\v/g, '\\v')
		.replace(/\0/g, '\\0');

	if (isChar)
	{
		return s.replace(/\'/g, '\\\'');
	}
	else
	{
		return s.replace(/\"/g, '\\"');
	}
}

function _Debug_ctorColor(ansi, string)
{
	return ansi ? '\x1b[96m' + string + '\x1b[0m' : string;
}

function _Debug_numberColor(ansi, string)
{
	return ansi ? '\x1b[95m' + string + '\x1b[0m' : string;
}

function _Debug_stringColor(ansi, string)
{
	return ansi ? '\x1b[93m' + string + '\x1b[0m' : string;
}

function _Debug_charColor(ansi, string)
{
	return ansi ? '\x1b[92m' + string + '\x1b[0m' : string;
}

function _Debug_fadeColor(ansi, string)
{
	return ansi ? '\x1b[37m' + string + '\x1b[0m' : string;
}

function _Debug_internalColor(ansi, string)
{
	return ansi ? '\x1b[94m' + string + '\x1b[0m' : string;
}



// CRASH


function _Debug_crash_UNUSED(identifier)
{
	throw new Error('https://github.com/elm/core/blob/1.0.0/hints/' + identifier + '.md');
}


function _Debug_crash(identifier, fact1, fact2, fact3, fact4)
{
	switch(identifier)
	{
		case 0:
			throw new Error('What node should I take over? In JavaScript I need something like:\n\n    Elm.Main.init({\n        node: document.getElementById("elm-node")\n    })\n\nYou need to do this with any Browser.sandbox or Browser.element program.');

		case 1:
			throw new Error('Browser.application programs cannot handle URLs like this:\n\n    ' + document.location.href + '\n\nWhat is the root? The root of your file system? Try looking at this program with `elm reactor` or some other server.');

		case 2:
			var jsonErrorString = fact1;
			throw new Error('Problem with the flags given to your Elm program on initialization.\n\n' + jsonErrorString);

		case 3:
			var portName = fact1;
			throw new Error('There can only be one port named `' + portName + '`, but your program has multiple.');

		case 4:
			var portName = fact1;
			var problem = fact2;
			throw new Error('Trying to send an unexpected type of value through port `' + portName + '`:\n' + problem);

		case 5:
			throw new Error('Trying to use `(==)` on functions.\nThere is no way to know if functions are "the same" in the Elm sense.\nRead more about this at https://package.elm-lang.org/packages/elm/core/latest/Basics#== which describes why it is this way and what the better version will look like.');

		case 6:
			var moduleName = fact1;
			throw new Error('Your page is loading multiple Elm scripts with a module named ' + moduleName + '. Maybe a duplicate script is getting loaded accidentally? If not, rename one of them so I know which is which!');

		case 8:
			var moduleName = fact1;
			var region = fact2;
			var message = fact3;
			throw new Error('TODO in module `' + moduleName + '` ' + _Debug_regionToString(region) + '\n\n' + message);

		case 9:
			var moduleName = fact1;
			var region = fact2;
			var value = fact3;
			var message = fact4;
			throw new Error(
				'TODO in module `' + moduleName + '` from the `case` expression '
				+ _Debug_regionToString(region) + '\n\nIt received the following value:\n\n    '
				+ _Debug_toString(value).replace('\n', '\n    ')
				+ '\n\nBut the branch that handles it says:\n\n    ' + message.replace('\n', '\n    ')
			);

		case 10:
			throw new Error('Bug in https://github.com/elm/virtual-dom/issues');

		case 11:
			throw new Error('Cannot perform mod 0. Division by zero error.');
	}
}

function _Debug_regionToString(region)
{
	if (region.start.line === region.end.line)
	{
		return 'on line ' + region.start.line;
	}
	return 'on lines ' + region.start.line + ' through ' + region.end.line;
}



// EQUALITY

function _Utils_eq(x, y)
{
	for (
		var pair, stack = [], isEqual = _Utils_eqHelp(x, y, 0, stack);
		isEqual && (pair = stack.pop());
		isEqual = _Utils_eqHelp(pair.a, pair.b, 0, stack)
		)
	{}

	return isEqual;
}

function _Utils_eqHelp(x, y, depth, stack)
{
	if (depth > 100)
	{
		stack.push(_Utils_Tuple2(x,y));
		return true;
	}

	if (x === y)
	{
		return true;
	}

	if (typeof x !== 'object' || x === null || y === null)
	{
		typeof x === 'function' && _Debug_crash(5);
		return false;
	}

	/**/
	if (x.$ === 'Set_elm_builtin')
	{
		x = elm$core$Set$toList(x);
		y = elm$core$Set$toList(y);
	}
	if (x.$ === 'RBNode_elm_builtin' || x.$ === 'RBEmpty_elm_builtin')
	{
		x = elm$core$Dict$toList(x);
		y = elm$core$Dict$toList(y);
	}
	//*/

	/**_UNUSED/
	if (x.$ < 0)
	{
		x = elm$core$Dict$toList(x);
		y = elm$core$Dict$toList(y);
	}
	//*/

	for (var key in x)
	{
		if (!_Utils_eqHelp(x[key], y[key], depth + 1, stack))
		{
			return false;
		}
	}
	return true;
}

var _Utils_equal = F2(_Utils_eq);
var _Utils_notEqual = F2(function(a, b) { return !_Utils_eq(a,b); });



// COMPARISONS

// Code in Generate/JavaScript.hs, Basics.js, and List.js depends on
// the particular integer values assigned to LT, EQ, and GT.

function _Utils_cmp(x, y, ord)
{
	if (typeof x !== 'object')
	{
		return x === y ? /*EQ*/ 0 : x < y ? /*LT*/ -1 : /*GT*/ 1;
	}

	/**/
	if (x instanceof String)
	{
		var a = x.valueOf();
		var b = y.valueOf();
		return a === b ? 0 : a < b ? -1 : 1;
	}
	//*/

	/**_UNUSED/
	if (!x.$)
	//*/
	/**/
	if (x.$[0] === '#')
	//*/
	{
		return (ord = _Utils_cmp(x.a, y.a))
			? ord
			: (ord = _Utils_cmp(x.b, y.b))
				? ord
				: _Utils_cmp(x.c, y.c);
	}

	// traverse conses until end of a list or a mismatch
	for (; x.b && y.b && !(ord = _Utils_cmp(x.a, y.a)); x = x.b, y = y.b) {} // WHILE_CONSES
	return ord || (x.b ? /*GT*/ 1 : y.b ? /*LT*/ -1 : /*EQ*/ 0);
}

var _Utils_lt = F2(function(a, b) { return _Utils_cmp(a, b) < 0; });
var _Utils_le = F2(function(a, b) { return _Utils_cmp(a, b) < 1; });
var _Utils_gt = F2(function(a, b) { return _Utils_cmp(a, b) > 0; });
var _Utils_ge = F2(function(a, b) { return _Utils_cmp(a, b) >= 0; });

var _Utils_compare = F2(function(x, y)
{
	var n = _Utils_cmp(x, y);
	return n < 0 ? elm$core$Basics$LT : n ? elm$core$Basics$GT : elm$core$Basics$EQ;
});


// COMMON VALUES

var _Utils_Tuple0_UNUSED = 0;
var _Utils_Tuple0 = { $: '#0' };

function _Utils_Tuple2_UNUSED(a, b) { return { a: a, b: b }; }
function _Utils_Tuple2(a, b) { return { $: '#2', a: a, b: b }; }

function _Utils_Tuple3_UNUSED(a, b, c) { return { a: a, b: b, c: c }; }
function _Utils_Tuple3(a, b, c) { return { $: '#3', a: a, b: b, c: c }; }

function _Utils_chr_UNUSED(c) { return c; }
function _Utils_chr(c) { return new String(c); }


// RECORDS

function _Utils_update(oldRecord, updatedFields)
{
	var newRecord = {};

	for (var key in oldRecord)
	{
		newRecord[key] = oldRecord[key];
	}

	for (var key in updatedFields)
	{
		newRecord[key] = updatedFields[key];
	}

	return newRecord;
}


// APPEND

var _Utils_append = F2(_Utils_ap);

function _Utils_ap(xs, ys)
{
	// append Strings
	if (typeof xs === 'string')
	{
		return xs + ys;
	}

	// append Lists
	if (!xs.b)
	{
		return ys;
	}
	var root = _List_Cons(xs.a, ys);
	xs = xs.b
	for (var curr = root; xs.b; xs = xs.b) // WHILE_CONS
	{
		curr = curr.b = _List_Cons(xs.a, ys);
	}
	return root;
}



var _List_Nil_UNUSED = { $: 0 };
var _List_Nil = { $: '[]' };

function _List_Cons_UNUSED(hd, tl) { return { $: 1, a: hd, b: tl }; }
function _List_Cons(hd, tl) { return { $: '::', a: hd, b: tl }; }


var _List_cons = F2(_List_Cons);

function _List_fromArray(arr)
{
	var out = _List_Nil;
	for (var i = arr.length; i--; )
	{
		out = _List_Cons(arr[i], out);
	}
	return out;
}

function _List_toArray(xs)
{
	for (var out = []; xs.b; xs = xs.b) // WHILE_CONS
	{
		out.push(xs.a);
	}
	return out;
}

var _List_map2 = F3(function(f, xs, ys)
{
	for (var arr = []; xs.b && ys.b; xs = xs.b, ys = ys.b) // WHILE_CONSES
	{
		arr.push(A2(f, xs.a, ys.a));
	}
	return _List_fromArray(arr);
});

var _List_map3 = F4(function(f, xs, ys, zs)
{
	for (var arr = []; xs.b && ys.b && zs.b; xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A3(f, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map4 = F5(function(f, ws, xs, ys, zs)
{
	for (var arr = []; ws.b && xs.b && ys.b && zs.b; ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A4(f, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map5 = F6(function(f, vs, ws, xs, ys, zs)
{
	for (var arr = []; vs.b && ws.b && xs.b && ys.b && zs.b; vs = vs.b, ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A5(f, vs.a, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_sortBy = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		return _Utils_cmp(f(a), f(b));
	}));
});

var _List_sortWith = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		var ord = A2(f, a, b);
		return ord === elm$core$Basics$EQ ? 0 : ord === elm$core$Basics$LT ? -1 : 1;
	}));
});



var _String_cons = F2(function(chr, str)
{
	return chr + str;
});

function _String_uncons(string)
{
	var word = string.charCodeAt(0);
	return word
		? elm$core$Maybe$Just(
			0xD800 <= word && word <= 0xDBFF
				? _Utils_Tuple2(_Utils_chr(string[0] + string[1]), string.slice(2))
				: _Utils_Tuple2(_Utils_chr(string[0]), string.slice(1))
		)
		: elm$core$Maybe$Nothing;
}

var _String_append = F2(function(a, b)
{
	return a + b;
});

function _String_length(str)
{
	return str.length;
}

var _String_map = F2(function(func, string)
{
	var len = string.length;
	var array = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = string.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			array[i] = func(_Utils_chr(string[i] + string[i+1]));
			i += 2;
			continue;
		}
		array[i] = func(_Utils_chr(string[i]));
		i++;
	}
	return array.join('');
});

var _String_filter = F2(function(isGood, str)
{
	var arr = [];
	var len = str.length;
	var i = 0;
	while (i < len)
	{
		var char = str[i];
		var word = str.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += str[i];
			i++;
		}

		if (isGood(_Utils_chr(char)))
		{
			arr.push(char);
		}
	}
	return arr.join('');
});

function _String_reverse(str)
{
	var len = str.length;
	var arr = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = str.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			arr[len - i] = str[i + 1];
			i++;
			arr[len - i] = str[i - 1];
			i++;
		}
		else
		{
			arr[len - i] = str[i];
			i++;
		}
	}
	return arr.join('');
}

var _String_foldl = F3(function(func, state, string)
{
	var len = string.length;
	var i = 0;
	while (i < len)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += string[i];
			i++;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_foldr = F3(function(func, state, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_split = F2(function(sep, str)
{
	return str.split(sep);
});

var _String_join = F2(function(sep, strs)
{
	return strs.join(sep);
});

var _String_slice = F3(function(start, end, str) {
	return str.slice(start, end);
});

function _String_trim(str)
{
	return str.trim();
}

function _String_trimLeft(str)
{
	return str.replace(/^\s+/, '');
}

function _String_trimRight(str)
{
	return str.replace(/\s+$/, '');
}

function _String_words(str)
{
	return _List_fromArray(str.trim().split(/\s+/g));
}

function _String_lines(str)
{
	return _List_fromArray(str.split(/\r\n|\r|\n/g));
}

function _String_toUpper(str)
{
	return str.toUpperCase();
}

function _String_toLower(str)
{
	return str.toLowerCase();
}

var _String_any = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (isGood(_Utils_chr(char)))
		{
			return true;
		}
	}
	return false;
});

var _String_all = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (!isGood(_Utils_chr(char)))
		{
			return false;
		}
	}
	return true;
});

var _String_contains = F2(function(sub, str)
{
	return str.indexOf(sub) > -1;
});

var _String_startsWith = F2(function(sub, str)
{
	return str.indexOf(sub) === 0;
});

var _String_endsWith = F2(function(sub, str)
{
	return str.length >= sub.length &&
		str.lastIndexOf(sub) === str.length - sub.length;
});

var _String_indexes = F2(function(sub, str)
{
	var subLen = sub.length;

	if (subLen < 1)
	{
		return _List_Nil;
	}

	var i = 0;
	var is = [];

	while ((i = str.indexOf(sub, i)) > -1)
	{
		is.push(i);
		i = i + subLen;
	}

	return _List_fromArray(is);
});


// TO STRING

function _String_fromNumber(number)
{
	return number + '';
}


// INT CONVERSIONS

function _String_toInt(str)
{
	var total = 0;
	var code0 = str.charCodeAt(0);
	var start = code0 == 0x2B /* + */ || code0 == 0x2D /* - */ ? 1 : 0;

	for (var i = start; i < str.length; ++i)
	{
		var code = str.charCodeAt(i);
		if (code < 0x30 || 0x39 < code)
		{
			return elm$core$Maybe$Nothing;
		}
		total = 10 * total + code - 0x30;
	}

	return i == start
		? elm$core$Maybe$Nothing
		: elm$core$Maybe$Just(code0 == 0x2D ? -total : total);
}


// FLOAT CONVERSIONS

function _String_toFloat(s)
{
	// check if it is a hex, octal, or binary number
	if (s.length === 0 || /[\sxbo]/.test(s))
	{
		return elm$core$Maybe$Nothing;
	}
	var n = +s;
	// faster isNaN check
	return n === n ? elm$core$Maybe$Just(n) : elm$core$Maybe$Nothing;
}

function _String_fromList(chars)
{
	return _List_toArray(chars).join('');
}




// MATH

var _Basics_add = F2(function(a, b) { return a + b; });
var _Basics_sub = F2(function(a, b) { return a - b; });
var _Basics_mul = F2(function(a, b) { return a * b; });
var _Basics_fdiv = F2(function(a, b) { return a / b; });
var _Basics_idiv = F2(function(a, b) { return (a / b) | 0; });
var _Basics_pow = F2(Math.pow);

var _Basics_remainderBy = F2(function(b, a) { return a % b; });

// https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/divmodnote-letter.pdf
var _Basics_modBy = F2(function(modulus, x)
{
	var answer = x % modulus;
	return modulus === 0
		? _Debug_crash(11)
		:
	((answer > 0 && modulus < 0) || (answer < 0 && modulus > 0))
		? answer + modulus
		: answer;
});


// TRIGONOMETRY

var _Basics_pi = Math.PI;
var _Basics_e = Math.E;
var _Basics_cos = Math.cos;
var _Basics_sin = Math.sin;
var _Basics_tan = Math.tan;
var _Basics_acos = Math.acos;
var _Basics_asin = Math.asin;
var _Basics_atan = Math.atan;
var _Basics_atan2 = F2(Math.atan2);


// MORE MATH

function _Basics_toFloat(x) { return x; }
function _Basics_truncate(n) { return n | 0; }
function _Basics_isInfinite(n) { return n === Infinity || n === -Infinity; }

var _Basics_ceiling = Math.ceil;
var _Basics_floor = Math.floor;
var _Basics_round = Math.round;
var _Basics_sqrt = Math.sqrt;
var _Basics_log = Math.log;
var _Basics_isNaN = isNaN;


// BOOLEANS

function _Basics_not(bool) { return !bool; }
var _Basics_and = F2(function(a, b) { return a && b; });
var _Basics_or  = F2(function(a, b) { return a || b; });
var _Basics_xor = F2(function(a, b) { return a !== b; });



function _Char_toCode(char)
{
	var code = char.charCodeAt(0);
	if (0xD800 <= code && code <= 0xDBFF)
	{
		return (code - 0xD800) * 0x400 + char.charCodeAt(1) - 0xDC00 + 0x10000
	}
	return code;
}

function _Char_fromCode(code)
{
	return _Utils_chr(
		(code < 0 || 0x10FFFF < code)
			? '\uFFFD'
			:
		(code <= 0xFFFF)
			? String.fromCharCode(code)
			:
		(code -= 0x10000,
			String.fromCharCode(Math.floor(code / 0x400) + 0xD800)
			+
			String.fromCharCode(code % 0x400 + 0xDC00)
		)
	);
}

function _Char_toUpper(char)
{
	return _Utils_chr(char.toUpperCase());
}

function _Char_toLower(char)
{
	return _Utils_chr(char.toLowerCase());
}

function _Char_toLocaleUpper(char)
{
	return _Utils_chr(char.toLocaleUpperCase());
}

function _Char_toLocaleLower(char)
{
	return _Utils_chr(char.toLocaleLowerCase());
}



/**/
function _Json_errorToString(error)
{
	return elm$json$Json$Decode$errorToString(error);
}
//*/


// CORE DECODERS

function _Json_succeed(msg)
{
	return {
		$: 0,
		a: msg
	};
}

function _Json_fail(msg)
{
	return {
		$: 1,
		a: msg
	};
}

function _Json_decodePrim(decoder)
{
	return { $: 2, b: decoder };
}

var _Json_decodeInt = _Json_decodePrim(function(value) {
	return (typeof value !== 'number')
		? _Json_expecting('an INT', value)
		:
	(-2147483647 < value && value < 2147483647 && (value | 0) === value)
		? elm$core$Result$Ok(value)
		:
	(isFinite(value) && !(value % 1))
		? elm$core$Result$Ok(value)
		: _Json_expecting('an INT', value);
});

var _Json_decodeBool = _Json_decodePrim(function(value) {
	return (typeof value === 'boolean')
		? elm$core$Result$Ok(value)
		: _Json_expecting('a BOOL', value);
});

var _Json_decodeFloat = _Json_decodePrim(function(value) {
	return (typeof value === 'number')
		? elm$core$Result$Ok(value)
		: _Json_expecting('a FLOAT', value);
});

var _Json_decodeValue = _Json_decodePrim(function(value) {
	return elm$core$Result$Ok(_Json_wrap(value));
});

var _Json_decodeString = _Json_decodePrim(function(value) {
	return (typeof value === 'string')
		? elm$core$Result$Ok(value)
		: (value instanceof String)
			? elm$core$Result$Ok(value + '')
			: _Json_expecting('a STRING', value);
});

function _Json_decodeList(decoder) { return { $: 3, b: decoder }; }
function _Json_decodeArray(decoder) { return { $: 4, b: decoder }; }

function _Json_decodeNull(value) { return { $: 5, c: value }; }

var _Json_decodeField = F2(function(field, decoder)
{
	return {
		$: 6,
		d: field,
		b: decoder
	};
});

var _Json_decodeIndex = F2(function(index, decoder)
{
	return {
		$: 7,
		e: index,
		b: decoder
	};
});

function _Json_decodeKeyValuePairs(decoder)
{
	return {
		$: 8,
		b: decoder
	};
}

function _Json_mapMany(f, decoders)
{
	return {
		$: 9,
		f: f,
		g: decoders
	};
}

var _Json_andThen = F2(function(callback, decoder)
{
	return {
		$: 10,
		b: decoder,
		h: callback
	};
});

function _Json_oneOf(decoders)
{
	return {
		$: 11,
		g: decoders
	};
}


// DECODING OBJECTS

var _Json_map1 = F2(function(f, d1)
{
	return _Json_mapMany(f, [d1]);
});

var _Json_map2 = F3(function(f, d1, d2)
{
	return _Json_mapMany(f, [d1, d2]);
});

var _Json_map3 = F4(function(f, d1, d2, d3)
{
	return _Json_mapMany(f, [d1, d2, d3]);
});

var _Json_map4 = F5(function(f, d1, d2, d3, d4)
{
	return _Json_mapMany(f, [d1, d2, d3, d4]);
});

var _Json_map5 = F6(function(f, d1, d2, d3, d4, d5)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5]);
});

var _Json_map6 = F7(function(f, d1, d2, d3, d4, d5, d6)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6]);
});

var _Json_map7 = F8(function(f, d1, d2, d3, d4, d5, d6, d7)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7]);
});

var _Json_map8 = F9(function(f, d1, d2, d3, d4, d5, d6, d7, d8)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
});


// DECODE

var _Json_runOnString = F2(function(decoder, string)
{
	try
	{
		var value = JSON.parse(string);
		return _Json_runHelp(decoder, value);
	}
	catch (e)
	{
		return elm$core$Result$Err(A2(elm$json$Json$Decode$Failure, 'This is not valid JSON! ' + e.message, _Json_wrap(string)));
	}
});

var _Json_run = F2(function(decoder, value)
{
	return _Json_runHelp(decoder, _Json_unwrap(value));
});

function _Json_runHelp(decoder, value)
{
	switch (decoder.$)
	{
		case 2:
			return decoder.b(value);

		case 5:
			return (value === null)
				? elm$core$Result$Ok(decoder.c)
				: _Json_expecting('null', value);

		case 3:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('a LIST', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _List_fromArray);

		case 4:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _Json_toElmArray);

		case 6:
			var field = decoder.d;
			if (typeof value !== 'object' || value === null || !(field in value))
			{
				return _Json_expecting('an OBJECT with a field named `' + field + '`', value);
			}
			var result = _Json_runHelp(decoder.b, value[field]);
			return (elm$core$Result$isOk(result)) ? result : elm$core$Result$Err(A2(elm$json$Json$Decode$Field, field, result.a));

		case 7:
			var index = decoder.e;
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			if (index >= value.length)
			{
				return _Json_expecting('a LONGER array. Need index ' + index + ' but only see ' + value.length + ' entries', value);
			}
			var result = _Json_runHelp(decoder.b, value[index]);
			return (elm$core$Result$isOk(result)) ? result : elm$core$Result$Err(A2(elm$json$Json$Decode$Index, index, result.a));

		case 8:
			if (typeof value !== 'object' || value === null || _Json_isArray(value))
			{
				return _Json_expecting('an OBJECT', value);
			}

			var keyValuePairs = _List_Nil;
			// TODO test perf of Object.keys and switch when support is good enough
			for (var key in value)
			{
				if (value.hasOwnProperty(key))
				{
					var result = _Json_runHelp(decoder.b, value[key]);
					if (!elm$core$Result$isOk(result))
					{
						return elm$core$Result$Err(A2(elm$json$Json$Decode$Field, key, result.a));
					}
					keyValuePairs = _List_Cons(_Utils_Tuple2(key, result.a), keyValuePairs);
				}
			}
			return elm$core$Result$Ok(elm$core$List$reverse(keyValuePairs));

		case 9:
			var answer = decoder.f;
			var decoders = decoder.g;
			for (var i = 0; i < decoders.length; i++)
			{
				var result = _Json_runHelp(decoders[i], value);
				if (!elm$core$Result$isOk(result))
				{
					return result;
				}
				answer = answer(result.a);
			}
			return elm$core$Result$Ok(answer);

		case 10:
			var result = _Json_runHelp(decoder.b, value);
			return (!elm$core$Result$isOk(result))
				? result
				: _Json_runHelp(decoder.h(result.a), value);

		case 11:
			var errors = _List_Nil;
			for (var temp = decoder.g; temp.b; temp = temp.b) // WHILE_CONS
			{
				var result = _Json_runHelp(temp.a, value);
				if (elm$core$Result$isOk(result))
				{
					return result;
				}
				errors = _List_Cons(result.a, errors);
			}
			return elm$core$Result$Err(elm$json$Json$Decode$OneOf(elm$core$List$reverse(errors)));

		case 1:
			return elm$core$Result$Err(A2(elm$json$Json$Decode$Failure, decoder.a, _Json_wrap(value)));

		case 0:
			return elm$core$Result$Ok(decoder.a);
	}
}

function _Json_runArrayDecoder(decoder, value, toElmValue)
{
	var len = value.length;
	var array = new Array(len);
	for (var i = 0; i < len; i++)
	{
		var result = _Json_runHelp(decoder, value[i]);
		if (!elm$core$Result$isOk(result))
		{
			return elm$core$Result$Err(A2(elm$json$Json$Decode$Index, i, result.a));
		}
		array[i] = result.a;
	}
	return elm$core$Result$Ok(toElmValue(array));
}

function _Json_isArray(value)
{
	return Array.isArray(value) || (typeof FileList === 'function' && value instanceof FileList);
}

function _Json_toElmArray(array)
{
	return A2(elm$core$Array$initialize, array.length, function(i) { return array[i]; });
}

function _Json_expecting(type, value)
{
	return elm$core$Result$Err(A2(elm$json$Json$Decode$Failure, 'Expecting ' + type, _Json_wrap(value)));
}


// EQUALITY

function _Json_equality(x, y)
{
	if (x === y)
	{
		return true;
	}

	if (x.$ !== y.$)
	{
		return false;
	}

	switch (x.$)
	{
		case 0:
		case 1:
			return x.a === y.a;

		case 2:
			return x.b === y.b;

		case 5:
			return x.c === y.c;

		case 3:
		case 4:
		case 8:
			return _Json_equality(x.b, y.b);

		case 6:
			return x.d === y.d && _Json_equality(x.b, y.b);

		case 7:
			return x.e === y.e && _Json_equality(x.b, y.b);

		case 9:
			return x.f === y.f && _Json_listEquality(x.g, y.g);

		case 10:
			return x.h === y.h && _Json_equality(x.b, y.b);

		case 11:
			return _Json_listEquality(x.g, y.g);
	}
}

function _Json_listEquality(aDecoders, bDecoders)
{
	var len = aDecoders.length;
	if (len !== bDecoders.length)
	{
		return false;
	}
	for (var i = 0; i < len; i++)
	{
		if (!_Json_equality(aDecoders[i], bDecoders[i]))
		{
			return false;
		}
	}
	return true;
}


// ENCODE

var _Json_encode = F2(function(indentLevel, value)
{
	return JSON.stringify(_Json_unwrap(value), null, indentLevel) + '';
});

function _Json_wrap(value) { return { $: 0, a: value }; }
function _Json_unwrap(value) { return value.a; }

function _Json_wrap_UNUSED(value) { return value; }
function _Json_unwrap_UNUSED(value) { return value; }

function _Json_emptyArray() { return []; }
function _Json_emptyObject() { return {}; }

var _Json_addField = F3(function(key, value, object)
{
	object[key] = _Json_unwrap(value);
	return object;
});

function _Json_addEntry(func)
{
	return F2(function(entry, array)
	{
		array.push(_Json_unwrap(func(entry)));
		return array;
	});
}

var _Json_encodeNull = _Json_wrap(null);



// TASKS

function _Scheduler_succeed(value)
{
	return {
		$: 0,
		a: value
	};
}

function _Scheduler_fail(error)
{
	return {
		$: 1,
		a: error
	};
}

function _Scheduler_binding(callback)
{
	return {
		$: 2,
		b: callback,
		c: null
	};
}

var _Scheduler_andThen = F2(function(callback, task)
{
	return {
		$: 3,
		b: callback,
		d: task
	};
});

var _Scheduler_onError = F2(function(callback, task)
{
	return {
		$: 4,
		b: callback,
		d: task
	};
});

function _Scheduler_receive(callback)
{
	return {
		$: 5,
		b: callback
	};
}


// PROCESSES

var _Scheduler_guid = 0;

function _Scheduler_rawSpawn(task)
{
	var proc = {
		$: 0,
		e: _Scheduler_guid++,
		f: task,
		g: null,
		h: []
	};

	_Scheduler_enqueue(proc);

	return proc;
}

function _Scheduler_spawn(task)
{
	return _Scheduler_binding(function(callback) {
		callback(_Scheduler_succeed(_Scheduler_rawSpawn(task)));
	});
}

function _Scheduler_rawSend(proc, msg)
{
	proc.h.push(msg);
	_Scheduler_enqueue(proc);
}

var _Scheduler_send = F2(function(proc, msg)
{
	return _Scheduler_binding(function(callback) {
		_Scheduler_rawSend(proc, msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});

function _Scheduler_kill(proc)
{
	return _Scheduler_binding(function(callback) {
		var task = proc.f;
		if (task.$ === 2 && task.c)
		{
			task.c();
		}

		proc.f = null;

		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
}


/* STEP PROCESSES

type alias Process =
  { $ : tag
  , id : unique_id
  , root : Task
  , stack : null | { $: SUCCEED | FAIL, a: callback, b: stack }
  , mailbox : [msg]
  }

*/


var _Scheduler_working = false;
var _Scheduler_queue = [];


function _Scheduler_enqueue(proc)
{
	_Scheduler_queue.push(proc);
	if (_Scheduler_working)
	{
		return;
	}
	_Scheduler_working = true;
	while (proc = _Scheduler_queue.shift())
	{
		_Scheduler_step(proc);
	}
	_Scheduler_working = false;
}


function _Scheduler_step(proc)
{
	while (proc.f)
	{
		var rootTag = proc.f.$;
		if (rootTag === 0 || rootTag === 1)
		{
			while (proc.g && proc.g.$ !== rootTag)
			{
				proc.g = proc.g.i;
			}
			if (!proc.g)
			{
				return;
			}
			proc.f = proc.g.b(proc.f.a);
			proc.g = proc.g.i;
		}
		else if (rootTag === 2)
		{
			proc.f.c = proc.f.b(function(newRoot) {
				proc.f = newRoot;
				_Scheduler_enqueue(proc);
			});
			return;
		}
		else if (rootTag === 5)
		{
			if (proc.h.length === 0)
			{
				return;
			}
			proc.f = proc.f.b(proc.h.shift());
		}
		else // if (rootTag === 3 || rootTag === 4)
		{
			proc.g = {
				$: rootTag === 3 ? 0 : 1,
				b: proc.f.b,
				i: proc.g
			};
			proc.f = proc.f.d;
		}
	}
}



function _Process_sleep(time)
{
	return _Scheduler_binding(function(callback) {
		var id = setTimeout(function() {
			callback(_Scheduler_succeed(_Utils_Tuple0));
		}, time);

		return function() { clearTimeout(id); };
	});
}




// PROGRAMS


var _Platform_worker = F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function() { return function() {} }
	);
});



// INITIALIZE A PROGRAM


function _Platform_initialize(flagDecoder, args, init, update, subscriptions, stepperBuilder)
{
	var result = A2(_Json_run, flagDecoder, _Json_wrap(args ? args['flags'] : undefined));
	elm$core$Result$isOk(result) || _Debug_crash(2 /**/, _Json_errorToString(result.a) /**/);
	var managers = {};
	result = init(result.a);
	var model = result.a;
	var stepper = stepperBuilder(sendToApp, model);
	var ports = _Platform_setupEffects(managers, sendToApp);

	function sendToApp(msg, viewMetadata)
	{
		result = A2(update, msg, model);
		stepper(model = result.a, viewMetadata);
		_Platform_dispatchEffects(managers, result.b, subscriptions(model));
	}

	_Platform_dispatchEffects(managers, result.b, subscriptions(model));

	return ports ? { ports: ports } : {};
}



// TRACK PRELOADS
//
// This is used by code in elm/browser and elm/http
// to register any HTTP requests that are triggered by init.
//


var _Platform_preload;


function _Platform_registerPreload(url)
{
	_Platform_preload.add(url);
}



// EFFECT MANAGERS


var _Platform_effectManagers = {};


function _Platform_setupEffects(managers, sendToApp)
{
	var ports;

	// setup all necessary effect managers
	for (var key in _Platform_effectManagers)
	{
		var manager = _Platform_effectManagers[key];

		if (manager.a)
		{
			ports = ports || {};
			ports[key] = manager.a(key, sendToApp);
		}

		managers[key] = _Platform_instantiateManager(manager, sendToApp);
	}

	return ports;
}


function _Platform_createManager(init, onEffects, onSelfMsg, cmdMap, subMap)
{
	return {
		b: init,
		c: onEffects,
		d: onSelfMsg,
		e: cmdMap,
		f: subMap
	};
}


function _Platform_instantiateManager(info, sendToApp)
{
	var router = {
		g: sendToApp,
		h: undefined
	};

	var onEffects = info.c;
	var onSelfMsg = info.d;
	var cmdMap = info.e;
	var subMap = info.f;

	function loop(state)
	{
		return A2(_Scheduler_andThen, loop, _Scheduler_receive(function(msg)
		{
			var value = msg.a;

			if (msg.$ === 0)
			{
				return A3(onSelfMsg, router, value, state);
			}

			return cmdMap && subMap
				? A4(onEffects, router, value.i, value.j, state)
				: A3(onEffects, router, cmdMap ? value.i : value.j, state);
		}));
	}

	return router.h = _Scheduler_rawSpawn(A2(_Scheduler_andThen, loop, info.b));
}



// ROUTING


var _Platform_sendToApp = F2(function(router, msg)
{
	return _Scheduler_binding(function(callback)
	{
		router.g(msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});


var _Platform_sendToSelf = F2(function(router, msg)
{
	return A2(_Scheduler_send, router.h, {
		$: 0,
		a: msg
	});
});



// BAGS


function _Platform_leaf(home)
{
	return function(value)
	{
		return {
			$: 1,
			k: home,
			l: value
		};
	};
}


function _Platform_batch(list)
{
	return {
		$: 2,
		m: list
	};
}


var _Platform_map = F2(function(tagger, bag)
{
	return {
		$: 3,
		n: tagger,
		o: bag
	}
});



// PIPE BAGS INTO EFFECT MANAGERS


function _Platform_dispatchEffects(managers, cmdBag, subBag)
{
	var effectsDict = {};
	_Platform_gatherEffects(true, cmdBag, effectsDict, null);
	_Platform_gatherEffects(false, subBag, effectsDict, null);

	for (var home in managers)
	{
		_Scheduler_rawSend(managers[home], {
			$: 'fx',
			a: effectsDict[home] || { i: _List_Nil, j: _List_Nil }
		});
	}
}


function _Platform_gatherEffects(isCmd, bag, effectsDict, taggers)
{
	switch (bag.$)
	{
		case 1:
			var home = bag.k;
			var effect = _Platform_toEffect(isCmd, home, taggers, bag.l);
			effectsDict[home] = _Platform_insert(isCmd, effect, effectsDict[home]);
			return;

		case 2:
			for (var list = bag.m; list.b; list = list.b) // WHILE_CONS
			{
				_Platform_gatherEffects(isCmd, list.a, effectsDict, taggers);
			}
			return;

		case 3:
			_Platform_gatherEffects(isCmd, bag.o, effectsDict, {
				p: bag.n,
				q: taggers
			});
			return;
	}
}


function _Platform_toEffect(isCmd, home, taggers, value)
{
	function applyTaggers(x)
	{
		for (var temp = taggers; temp; temp = temp.q)
		{
			x = temp.p(x);
		}
		return x;
	}

	var map = isCmd
		? _Platform_effectManagers[home].e
		: _Platform_effectManagers[home].f;

	return A2(map, applyTaggers, value)
}


function _Platform_insert(isCmd, newEffect, effects)
{
	effects = effects || { i: _List_Nil, j: _List_Nil };

	isCmd
		? (effects.i = _List_Cons(newEffect, effects.i))
		: (effects.j = _List_Cons(newEffect, effects.j));

	return effects;
}



// PORTS


function _Platform_checkPortName(name)
{
	if (_Platform_effectManagers[name])
	{
		_Debug_crash(3, name)
	}
}



// OUTGOING PORTS


function _Platform_outgoingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		e: _Platform_outgoingPortMap,
		r: converter,
		a: _Platform_setupOutgoingPort
	};
	return _Platform_leaf(name);
}


var _Platform_outgoingPortMap = F2(function(tagger, value) { return value; });


function _Platform_setupOutgoingPort(name)
{
	var subs = [];
	var converter = _Platform_effectManagers[name].r;

	// CREATE MANAGER

	var init = _Process_sleep(0);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, cmdList, state)
	{
		for ( ; cmdList.b; cmdList = cmdList.b) // WHILE_CONS
		{
			// grab a separate reference to subs in case unsubscribe is called
			var currentSubs = subs;
			var value = _Json_unwrap(converter(cmdList.a));
			for (var i = 0; i < currentSubs.length; i++)
			{
				currentSubs[i](value);
			}
		}
		return init;
	});

	// PUBLIC API

	function subscribe(callback)
	{
		subs.push(callback);
	}

	function unsubscribe(callback)
	{
		// copy subs into a new array in case unsubscribe is called within a
		// subscribed callback
		subs = subs.slice();
		var index = subs.indexOf(callback);
		if (index >= 0)
		{
			subs.splice(index, 1);
		}
	}

	return {
		subscribe: subscribe,
		unsubscribe: unsubscribe
	};
}



// INCOMING PORTS


function _Platform_incomingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		f: _Platform_incomingPortMap,
		r: converter,
		a: _Platform_setupIncomingPort
	};
	return _Platform_leaf(name);
}


var _Platform_incomingPortMap = F2(function(tagger, finalTagger)
{
	return function(value)
	{
		return tagger(finalTagger(value));
	};
});


function _Platform_setupIncomingPort(name, sendToApp)
{
	var subs = _List_Nil;
	var converter = _Platform_effectManagers[name].r;

	// CREATE MANAGER

	var init = _Scheduler_succeed(null);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, subList, state)
	{
		subs = subList;
		return init;
	});

	// PUBLIC API

	function send(incomingValue)
	{
		var result = A2(_Json_run, converter, _Json_wrap(incomingValue));

		elm$core$Result$isOk(result) || _Debug_crash(4, name, result.a);

		var value = result.a;
		for (var temp = subs; temp.b; temp = temp.b) // WHILE_CONS
		{
			sendToApp(temp.a(value));
		}
	}

	return { send: send };
}



// EXPORT ELM MODULES
//
// Have DEBUG and PROD versions so that we can (1) give nicer errors in
// debug mode and (2) not pay for the bits needed for that in prod mode.
//


function _Platform_export_UNUSED(exports)
{
	scope['Elm']
		? _Platform_mergeExportsProd(scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsProd(obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6)
				: _Platform_mergeExportsProd(obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}


function _Platform_export(exports)
{
	scope['Elm']
		? _Platform_mergeExportsDebug('Elm', scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsDebug(moduleName, obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6, moduleName)
				: _Platform_mergeExportsDebug(moduleName + '.' + name, obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}




// HELPERS


var _VirtualDom_divertHrefToApp;

var _VirtualDom_doc = typeof document !== 'undefined' ? document : {};


function _VirtualDom_appendChild(parent, child)
{
	parent.appendChild(child);
}

var _VirtualDom_init = F4(function(virtualNode, flagDecoder, debugMetadata, args)
{
	// NOTE: this function needs _Platform_export available to work

	/**_UNUSED/
	var node = args['node'];
	//*/
	/**/
	var node = args && args['node'] ? args['node'] : _Debug_crash(0);
	//*/

	node.parentNode.replaceChild(
		_VirtualDom_render(virtualNode, function() {}),
		node
	);

	return {};
});



// TEXT


function _VirtualDom_text(string)
{
	return {
		$: 0,
		a: string
	};
}



// NODE


var _VirtualDom_nodeNS = F2(function(namespace, tag)
{
	return F2(function(factList, kidList)
	{
		for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
		{
			var kid = kidList.a;
			descendantsCount += (kid.b || 0);
			kids.push(kid);
		}
		descendantsCount += kids.length;

		return {
			$: 1,
			c: tag,
			d: _VirtualDom_organizeFacts(factList),
			e: kids,
			f: namespace,
			b: descendantsCount
		};
	});
});


var _VirtualDom_node = _VirtualDom_nodeNS(undefined);



// KEYED NODE


var _VirtualDom_keyedNodeNS = F2(function(namespace, tag)
{
	return F2(function(factList, kidList)
	{
		for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
		{
			var kid = kidList.a;
			descendantsCount += (kid.b.b || 0);
			kids.push(kid);
		}
		descendantsCount += kids.length;

		return {
			$: 2,
			c: tag,
			d: _VirtualDom_organizeFacts(factList),
			e: kids,
			f: namespace,
			b: descendantsCount
		};
	});
});


var _VirtualDom_keyedNode = _VirtualDom_keyedNodeNS(undefined);



// CUSTOM


function _VirtualDom_custom(factList, model, render, diff)
{
	return {
		$: 3,
		d: _VirtualDom_organizeFacts(factList),
		g: model,
		h: render,
		i: diff
	};
}



// MAP


var _VirtualDom_map = F2(function(tagger, node)
{
	return {
		$: 4,
		j: tagger,
		k: node,
		b: 1 + (node.b || 0)
	};
});



// LAZY


function _VirtualDom_thunk(refs, thunk)
{
	return {
		$: 5,
		l: refs,
		m: thunk,
		k: undefined
	};
}

var _VirtualDom_lazy = F2(function(func, a)
{
	return _VirtualDom_thunk([func, a], function() {
		return func(a);
	});
});

var _VirtualDom_lazy2 = F3(function(func, a, b)
{
	return _VirtualDom_thunk([func, a, b], function() {
		return A2(func, a, b);
	});
});

var _VirtualDom_lazy3 = F4(function(func, a, b, c)
{
	return _VirtualDom_thunk([func, a, b, c], function() {
		return A3(func, a, b, c);
	});
});

var _VirtualDom_lazy4 = F5(function(func, a, b, c, d)
{
	return _VirtualDom_thunk([func, a, b, c, d], function() {
		return A4(func, a, b, c, d);
	});
});

var _VirtualDom_lazy5 = F6(function(func, a, b, c, d, e)
{
	return _VirtualDom_thunk([func, a, b, c, d, e], function() {
		return A5(func, a, b, c, d, e);
	});
});

var _VirtualDom_lazy6 = F7(function(func, a, b, c, d, e, f)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f], function() {
		return A6(func, a, b, c, d, e, f);
	});
});

var _VirtualDom_lazy7 = F8(function(func, a, b, c, d, e, f, g)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f, g], function() {
		return A7(func, a, b, c, d, e, f, g);
	});
});

var _VirtualDom_lazy8 = F9(function(func, a, b, c, d, e, f, g, h)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f, g, h], function() {
		return A8(func, a, b, c, d, e, f, g, h);
	});
});



// FACTS


var _VirtualDom_on = F2(function(key, handler)
{
	return {
		$: 'a0',
		n: key,
		o: handler
	};
});
var _VirtualDom_style = F2(function(key, value)
{
	return {
		$: 'a1',
		n: key,
		o: value
	};
});
var _VirtualDom_property = F2(function(key, value)
{
	return {
		$: 'a2',
		n: key,
		o: value
	};
});
var _VirtualDom_attribute = F2(function(key, value)
{
	return {
		$: 'a3',
		n: key,
		o: value
	};
});
var _VirtualDom_attributeNS = F3(function(namespace, key, value)
{
	return {
		$: 'a4',
		n: key,
		o: { f: namespace, o: value }
	};
});



// XSS ATTACK VECTOR CHECKS


function _VirtualDom_noScript(tag)
{
	return tag == 'script' ? 'p' : tag;
}

function _VirtualDom_noOnOrFormAction(key)
{
	return /^(on|formAction$)/i.test(key) ? 'data-' + key : key;
}

function _VirtualDom_noInnerHtmlOrFormAction(key)
{
	return key == 'innerHTML' || key == 'formAction' ? 'data-' + key : key;
}

function _VirtualDom_noJavaScriptUri_UNUSED(value)
{
	return /^javascript:/i.test(value.replace(/\s/g,'')) ? '' : value;
}

function _VirtualDom_noJavaScriptUri(value)
{
	return /^javascript:/i.test(value.replace(/\s/g,''))
		? 'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'
		: value;
}

function _VirtualDom_noJavaScriptOrHtmlUri_UNUSED(value)
{
	return /^\s*(javascript:|data:text\/html)/i.test(value) ? '' : value;
}

function _VirtualDom_noJavaScriptOrHtmlUri(value)
{
	return /^\s*(javascript:|data:text\/html)/i.test(value)
		? 'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'
		: value;
}



// MAP FACTS


var _VirtualDom_mapAttribute = F2(function(func, attr)
{
	return (attr.$ === 'a0')
		? A2(_VirtualDom_on, attr.n, _VirtualDom_mapHandler(func, attr.o))
		: attr;
});

function _VirtualDom_mapHandler(func, handler)
{
	var tag = elm$virtual_dom$VirtualDom$toHandlerInt(handler);

	// 0 = Normal
	// 1 = MayStopPropagation
	// 2 = MayPreventDefault
	// 3 = Custom

	return {
		$: handler.$,
		a:
			!tag
				? A2(elm$json$Json$Decode$map, func, handler.a)
				:
			A3(elm$json$Json$Decode$map2,
				tag < 3
					? _VirtualDom_mapEventTuple
					: _VirtualDom_mapEventRecord,
				elm$json$Json$Decode$succeed(func),
				handler.a
			)
	};
}

var _VirtualDom_mapEventTuple = F2(function(func, tuple)
{
	return _Utils_Tuple2(func(tuple.a), tuple.b);
});

var _VirtualDom_mapEventRecord = F2(function(func, record)
{
	return {
		message: func(record.message),
		stopPropagation: record.stopPropagation,
		preventDefault: record.preventDefault
	}
});



// ORGANIZE FACTS


function _VirtualDom_organizeFacts(factList)
{
	for (var facts = {}; factList.b; factList = factList.b) // WHILE_CONS
	{
		var entry = factList.a;

		var tag = entry.$;
		var key = entry.n;
		var value = entry.o;

		if (tag === 'a2')
		{
			(key === 'className')
				? _VirtualDom_addClass(facts, key, _Json_unwrap(value))
				: facts[key] = _Json_unwrap(value);

			continue;
		}

		var subFacts = facts[tag] || (facts[tag] = {});
		(tag === 'a3' && key === 'class')
			? _VirtualDom_addClass(subFacts, key, value)
			: subFacts[key] = value;
	}

	return facts;
}

function _VirtualDom_addClass(object, key, newClass)
{
	var classes = object[key];
	object[key] = classes ? classes + ' ' + newClass : newClass;
}



// RENDER


function _VirtualDom_render(vNode, eventNode)
{
	var tag = vNode.$;

	if (tag === 5)
	{
		return _VirtualDom_render(vNode.k || (vNode.k = vNode.m()), eventNode);
	}

	if (tag === 0)
	{
		return _VirtualDom_doc.createTextNode(vNode.a);
	}

	if (tag === 4)
	{
		var subNode = vNode.k;
		var tagger = vNode.j;

		while (subNode.$ === 4)
		{
			typeof tagger !== 'object'
				? tagger = [tagger, subNode.j]
				: tagger.push(subNode.j);

			subNode = subNode.k;
		}

		var subEventRoot = { j: tagger, p: eventNode };
		var domNode = _VirtualDom_render(subNode, subEventRoot);
		domNode.elm_event_node_ref = subEventRoot;
		return domNode;
	}

	if (tag === 3)
	{
		var domNode = vNode.h(vNode.g);
		_VirtualDom_applyFacts(domNode, eventNode, vNode.d);
		return domNode;
	}

	// at this point `tag` must be 1 or 2

	var domNode = vNode.f
		? _VirtualDom_doc.createElementNS(vNode.f, vNode.c)
		: _VirtualDom_doc.createElement(vNode.c);

	if (_VirtualDom_divertHrefToApp && vNode.c == 'a')
	{
		domNode.addEventListener('click', _VirtualDom_divertHrefToApp(domNode));
	}

	_VirtualDom_applyFacts(domNode, eventNode, vNode.d);

	for (var kids = vNode.e, i = 0; i < kids.length; i++)
	{
		_VirtualDom_appendChild(domNode, _VirtualDom_render(tag === 1 ? kids[i] : kids[i].b, eventNode));
	}

	return domNode;
}



// APPLY FACTS


function _VirtualDom_applyFacts(domNode, eventNode, facts)
{
	for (var key in facts)
	{
		var value = facts[key];

		key === 'a1'
			? _VirtualDom_applyStyles(domNode, value)
			:
		key === 'a0'
			? _VirtualDom_applyEvents(domNode, eventNode, value)
			:
		key === 'a3'
			? _VirtualDom_applyAttrs(domNode, value)
			:
		key === 'a4'
			? _VirtualDom_applyAttrsNS(domNode, value)
			:
		((key !== 'value' && key !== 'checked') || domNode[key] !== value) && (domNode[key] = value);
	}
}



// APPLY STYLES


function _VirtualDom_applyStyles(domNode, styles)
{
	var domNodeStyle = domNode.style;

	for (var key in styles)
	{
		domNodeStyle[key] = styles[key];
	}
}



// APPLY ATTRS


function _VirtualDom_applyAttrs(domNode, attrs)
{
	for (var key in attrs)
	{
		var value = attrs[key];
		typeof value !== 'undefined'
			? domNode.setAttribute(key, value)
			: domNode.removeAttribute(key);
	}
}



// APPLY NAMESPACED ATTRS


function _VirtualDom_applyAttrsNS(domNode, nsAttrs)
{
	for (var key in nsAttrs)
	{
		var pair = nsAttrs[key];
		var namespace = pair.f;
		var value = pair.o;

		typeof value !== 'undefined'
			? domNode.setAttributeNS(namespace, key, value)
			: domNode.removeAttributeNS(namespace, key);
	}
}



// APPLY EVENTS


function _VirtualDom_applyEvents(domNode, eventNode, events)
{
	var allCallbacks = domNode.elmFs || (domNode.elmFs = {});

	for (var key in events)
	{
		var newHandler = events[key];
		var oldCallback = allCallbacks[key];

		if (!newHandler)
		{
			domNode.removeEventListener(key, oldCallback);
			allCallbacks[key] = undefined;
			continue;
		}

		if (oldCallback)
		{
			var oldHandler = oldCallback.q;
			if (oldHandler.$ === newHandler.$)
			{
				oldCallback.q = newHandler;
				continue;
			}
			domNode.removeEventListener(key, oldCallback);
		}

		oldCallback = _VirtualDom_makeCallback(eventNode, newHandler);
		domNode.addEventListener(key, oldCallback,
			_VirtualDom_passiveSupported
			&& { passive: elm$virtual_dom$VirtualDom$toHandlerInt(newHandler) < 2 }
		);
		allCallbacks[key] = oldCallback;
	}
}



// PASSIVE EVENTS


var _VirtualDom_passiveSupported;

try
{
	window.addEventListener('t', null, Object.defineProperty({}, 'passive', {
		get: function() { _VirtualDom_passiveSupported = true; }
	}));
}
catch(e) {}



// EVENT HANDLERS


function _VirtualDom_makeCallback(eventNode, initialHandler)
{
	function callback(event)
	{
		var handler = callback.q;
		var result = _Json_runHelp(handler.a, event);

		if (!elm$core$Result$isOk(result))
		{
			return;
		}

		var tag = elm$virtual_dom$VirtualDom$toHandlerInt(handler);

		// 0 = Normal
		// 1 = MayStopPropagation
		// 2 = MayPreventDefault
		// 3 = Custom

		var value = result.a;
		var message = !tag ? value : tag < 3 ? value.a : value.message;
		var stopPropagation = tag == 1 ? value.b : tag == 3 && value.stopPropagation;
		var currentEventNode = (
			stopPropagation && event.stopPropagation(),
			(tag == 2 ? value.b : tag == 3 && value.preventDefault) && event.preventDefault(),
			eventNode
		);
		var tagger;
		var i;
		while (tagger = currentEventNode.j)
		{
			if (typeof tagger == 'function')
			{
				message = tagger(message);
			}
			else
			{
				for (var i = tagger.length; i--; )
				{
					message = tagger[i](message);
				}
			}
			currentEventNode = currentEventNode.p;
		}
		currentEventNode(message, stopPropagation); // stopPropagation implies isSync
	}

	callback.q = initialHandler;

	return callback;
}

function _VirtualDom_equalEvents(x, y)
{
	return x.$ == y.$ && _Json_equality(x.a, y.a);
}



// DIFF


// TODO: Should we do patches like in iOS?
//
// type Patch
//   = At Int Patch
//   | Batch (List Patch)
//   | Change ...
//
// How could it not be better?
//
function _VirtualDom_diff(x, y)
{
	var patches = [];
	_VirtualDom_diffHelp(x, y, patches, 0);
	return patches;
}


function _VirtualDom_pushPatch(patches, type, index, data)
{
	var patch = {
		$: type,
		r: index,
		s: data,
		t: undefined,
		u: undefined
	};
	patches.push(patch);
	return patch;
}


function _VirtualDom_diffHelp(x, y, patches, index)
{
	if (x === y)
	{
		return;
	}

	var xType = x.$;
	var yType = y.$;

	// Bail if you run into different types of nodes. Implies that the
	// structure has changed significantly and it's not worth a diff.
	if (xType !== yType)
	{
		if (xType === 1 && yType === 2)
		{
			y = _VirtualDom_dekey(y);
			yType = 1;
		}
		else
		{
			_VirtualDom_pushPatch(patches, 0, index, y);
			return;
		}
	}

	// Now we know that both nodes are the same $.
	switch (yType)
	{
		case 5:
			var xRefs = x.l;
			var yRefs = y.l;
			var i = xRefs.length;
			var same = i === yRefs.length;
			while (same && i--)
			{
				same = xRefs[i] === yRefs[i];
			}
			if (same)
			{
				y.k = x.k;
				return;
			}
			y.k = y.m();
			var subPatches = [];
			_VirtualDom_diffHelp(x.k, y.k, subPatches, 0);
			subPatches.length > 0 && _VirtualDom_pushPatch(patches, 1, index, subPatches);
			return;

		case 4:
			// gather nested taggers
			var xTaggers = x.j;
			var yTaggers = y.j;
			var nesting = false;

			var xSubNode = x.k;
			while (xSubNode.$ === 4)
			{
				nesting = true;

				typeof xTaggers !== 'object'
					? xTaggers = [xTaggers, xSubNode.j]
					: xTaggers.push(xSubNode.j);

				xSubNode = xSubNode.k;
			}

			var ySubNode = y.k;
			while (ySubNode.$ === 4)
			{
				nesting = true;

				typeof yTaggers !== 'object'
					? yTaggers = [yTaggers, ySubNode.j]
					: yTaggers.push(ySubNode.j);

				ySubNode = ySubNode.k;
			}

			// Just bail if different numbers of taggers. This implies the
			// structure of the virtual DOM has changed.
			if (nesting && xTaggers.length !== yTaggers.length)
			{
				_VirtualDom_pushPatch(patches, 0, index, y);
				return;
			}

			// check if taggers are "the same"
			if (nesting ? !_VirtualDom_pairwiseRefEqual(xTaggers, yTaggers) : xTaggers !== yTaggers)
			{
				_VirtualDom_pushPatch(patches, 2, index, yTaggers);
			}

			// diff everything below the taggers
			_VirtualDom_diffHelp(xSubNode, ySubNode, patches, index + 1);
			return;

		case 0:
			if (x.a !== y.a)
			{
				_VirtualDom_pushPatch(patches, 3, index, y.a);
			}
			return;

		case 1:
			_VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKids);
			return;

		case 2:
			_VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKeyedKids);
			return;

		case 3:
			if (x.h !== y.h)
			{
				_VirtualDom_pushPatch(patches, 0, index, y);
				return;
			}

			var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
			factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);

			var patch = y.i(x.g, y.g);
			patch && _VirtualDom_pushPatch(patches, 5, index, patch);

			return;
	}
}

// assumes the incoming arrays are the same length
function _VirtualDom_pairwiseRefEqual(as, bs)
{
	for (var i = 0; i < as.length; i++)
	{
		if (as[i] !== bs[i])
		{
			return false;
		}
	}

	return true;
}

function _VirtualDom_diffNodes(x, y, patches, index, diffKids)
{
	// Bail if obvious indicators have changed. Implies more serious
	// structural changes such that it's not worth it to diff.
	if (x.c !== y.c || x.f !== y.f)
	{
		_VirtualDom_pushPatch(patches, 0, index, y);
		return;
	}

	var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
	factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);

	diffKids(x, y, patches, index);
}



// DIFF FACTS


// TODO Instead of creating a new diff object, it's possible to just test if
// there *is* a diff. During the actual patch, do the diff again and make the
// modifications directly. This way, there's no new allocations. Worth it?
function _VirtualDom_diffFacts(x, y, category)
{
	var diff;

	// look for changes and removals
	for (var xKey in x)
	{
		if (xKey === 'a1' || xKey === 'a0' || xKey === 'a3' || xKey === 'a4')
		{
			var subDiff = _VirtualDom_diffFacts(x[xKey], y[xKey] || {}, xKey);
			if (subDiff)
			{
				diff = diff || {};
				diff[xKey] = subDiff;
			}
			continue;
		}

		// remove if not in the new facts
		if (!(xKey in y))
		{
			diff = diff || {};
			diff[xKey] =
				!category
					? (typeof x[xKey] === 'string' ? '' : null)
					:
				(category === 'a1')
					? ''
					:
				(category === 'a0' || category === 'a3')
					? undefined
					:
				{ f: x[xKey].f, o: undefined };

			continue;
		}

		var xValue = x[xKey];
		var yValue = y[xKey];

		// reference equal, so don't worry about it
		if (xValue === yValue && xKey !== 'value' && xKey !== 'checked'
			|| category === 'a0' && _VirtualDom_equalEvents(xValue, yValue))
		{
			continue;
		}

		diff = diff || {};
		diff[xKey] = yValue;
	}

	// add new stuff
	for (var yKey in y)
	{
		if (!(yKey in x))
		{
			diff = diff || {};
			diff[yKey] = y[yKey];
		}
	}

	return diff;
}



// DIFF KIDS


function _VirtualDom_diffKids(xParent, yParent, patches, index)
{
	var xKids = xParent.e;
	var yKids = yParent.e;

	var xLen = xKids.length;
	var yLen = yKids.length;

	// FIGURE OUT IF THERE ARE INSERTS OR REMOVALS

	if (xLen > yLen)
	{
		_VirtualDom_pushPatch(patches, 6, index, {
			v: yLen,
			i: xLen - yLen
		});
	}
	else if (xLen < yLen)
	{
		_VirtualDom_pushPatch(patches, 7, index, {
			v: xLen,
			e: yKids
		});
	}

	// PAIRWISE DIFF EVERYTHING ELSE

	for (var minLen = xLen < yLen ? xLen : yLen, i = 0; i < minLen; i++)
	{
		var xKid = xKids[i];
		_VirtualDom_diffHelp(xKid, yKids[i], patches, ++index);
		index += xKid.b || 0;
	}
}



// KEYED DIFF


function _VirtualDom_diffKeyedKids(xParent, yParent, patches, rootIndex)
{
	var localPatches = [];

	var changes = {}; // Dict String Entry
	var inserts = []; // Array { index : Int, entry : Entry }
	// type Entry = { tag : String, vnode : VNode, index : Int, data : _ }

	var xKids = xParent.e;
	var yKids = yParent.e;
	var xLen = xKids.length;
	var yLen = yKids.length;
	var xIndex = 0;
	var yIndex = 0;

	var index = rootIndex;

	while (xIndex < xLen && yIndex < yLen)
	{
		var x = xKids[xIndex];
		var y = yKids[yIndex];

		var xKey = x.a;
		var yKey = y.a;
		var xNode = x.b;
		var yNode = y.b;

		var newMatch = undefined;
		var oldMatch = undefined;

		// check if keys match

		if (xKey === yKey)
		{
			index++;
			_VirtualDom_diffHelp(xNode, yNode, localPatches, index);
			index += xNode.b || 0;

			xIndex++;
			yIndex++;
			continue;
		}

		// look ahead 1 to detect insertions and removals.

		var xNext = xKids[xIndex + 1];
		var yNext = yKids[yIndex + 1];

		if (xNext)
		{
			var xNextKey = xNext.a;
			var xNextNode = xNext.b;
			oldMatch = yKey === xNextKey;
		}

		if (yNext)
		{
			var yNextKey = yNext.a;
			var yNextNode = yNext.b;
			newMatch = xKey === yNextKey;
		}


		// swap x and y
		if (newMatch && oldMatch)
		{
			index++;
			_VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
			_VirtualDom_insertNode(changes, localPatches, xKey, yNode, yIndex, inserts);
			index += xNode.b || 0;

			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNextNode, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 2;
			continue;
		}

		// insert y
		if (newMatch)
		{
			index++;
			_VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
			_VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
			index += xNode.b || 0;

			xIndex += 1;
			yIndex += 2;
			continue;
		}

		// remove x
		if (oldMatch)
		{
			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
			index += xNode.b || 0;

			index++;
			_VirtualDom_diffHelp(xNextNode, yNode, localPatches, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 1;
			continue;
		}

		// remove x, insert y
		if (xNext && xNextKey === yNextKey)
		{
			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
			_VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
			index += xNode.b || 0;

			index++;
			_VirtualDom_diffHelp(xNextNode, yNextNode, localPatches, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 2;
			continue;
		}

		break;
	}

	// eat up any remaining nodes with removeNode and insertNode

	while (xIndex < xLen)
	{
		index++;
		var x = xKids[xIndex];
		var xNode = x.b;
		_VirtualDom_removeNode(changes, localPatches, x.a, xNode, index);
		index += xNode.b || 0;
		xIndex++;
	}

	while (yIndex < yLen)
	{
		var endInserts = endInserts || [];
		var y = yKids[yIndex];
		_VirtualDom_insertNode(changes, localPatches, y.a, y.b, undefined, endInserts);
		yIndex++;
	}

	if (localPatches.length > 0 || inserts.length > 0 || endInserts)
	{
		_VirtualDom_pushPatch(patches, 8, rootIndex, {
			w: localPatches,
			x: inserts,
			y: endInserts
		});
	}
}



// CHANGES FROM KEYED DIFF


var _VirtualDom_POSTFIX = '_elmW6BL';


function _VirtualDom_insertNode(changes, localPatches, key, vnode, yIndex, inserts)
{
	var entry = changes[key];

	// never seen this key before
	if (!entry)
	{
		entry = {
			c: 0,
			z: vnode,
			r: yIndex,
			s: undefined
		};

		inserts.push({ r: yIndex, A: entry });
		changes[key] = entry;

		return;
	}

	// this key was removed earlier, a match!
	if (entry.c === 1)
	{
		inserts.push({ r: yIndex, A: entry });

		entry.c = 2;
		var subPatches = [];
		_VirtualDom_diffHelp(entry.z, vnode, subPatches, entry.r);
		entry.r = yIndex;
		entry.s.s = {
			w: subPatches,
			A: entry
		};

		return;
	}

	// this key has already been inserted or moved, a duplicate!
	_VirtualDom_insertNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, yIndex, inserts);
}


function _VirtualDom_removeNode(changes, localPatches, key, vnode, index)
{
	var entry = changes[key];

	// never seen this key before
	if (!entry)
	{
		var patch = _VirtualDom_pushPatch(localPatches, 9, index, undefined);

		changes[key] = {
			c: 1,
			z: vnode,
			r: index,
			s: patch
		};

		return;
	}

	// this key was inserted earlier, a match!
	if (entry.c === 0)
	{
		entry.c = 2;
		var subPatches = [];
		_VirtualDom_diffHelp(vnode, entry.z, subPatches, index);

		_VirtualDom_pushPatch(localPatches, 9, index, {
			w: subPatches,
			A: entry
		});

		return;
	}

	// this key has already been removed or moved, a duplicate!
	_VirtualDom_removeNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, index);
}



// ADD DOM NODES
//
// Each DOM node has an "index" assigned in order of traversal. It is important
// to minimize our crawl over the actual DOM, so these indexes (along with the
// descendantsCount of virtual nodes) let us skip touching entire subtrees of
// the DOM if we know there are no patches there.


function _VirtualDom_addDomNodes(domNode, vNode, patches, eventNode)
{
	_VirtualDom_addDomNodesHelp(domNode, vNode, patches, 0, 0, vNode.b, eventNode);
}


// assumes `patches` is non-empty and indexes increase monotonically.
function _VirtualDom_addDomNodesHelp(domNode, vNode, patches, i, low, high, eventNode)
{
	var patch = patches[i];
	var index = patch.r;

	while (index === low)
	{
		var patchType = patch.$;

		if (patchType === 1)
		{
			_VirtualDom_addDomNodes(domNode, vNode.k, patch.s, eventNode);
		}
		else if (patchType === 8)
		{
			patch.t = domNode;
			patch.u = eventNode;

			var subPatches = patch.s.w;
			if (subPatches.length > 0)
			{
				_VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
			}
		}
		else if (patchType === 9)
		{
			patch.t = domNode;
			patch.u = eventNode;

			var data = patch.s;
			if (data)
			{
				data.A.s = domNode;
				var subPatches = data.w;
				if (subPatches.length > 0)
				{
					_VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
				}
			}
		}
		else
		{
			patch.t = domNode;
			patch.u = eventNode;
		}

		i++;

		if (!(patch = patches[i]) || (index = patch.r) > high)
		{
			return i;
		}
	}

	var tag = vNode.$;

	if (tag === 4)
	{
		var subNode = vNode.k;

		while (subNode.$ === 4)
		{
			subNode = subNode.k;
		}

		return _VirtualDom_addDomNodesHelp(domNode, subNode, patches, i, low + 1, high, domNode.elm_event_node_ref);
	}

	// tag must be 1 or 2 at this point

	var vKids = vNode.e;
	var childNodes = domNode.childNodes;
	for (var j = 0; j < vKids.length; j++)
	{
		low++;
		var vKid = tag === 1 ? vKids[j] : vKids[j].b;
		var nextLow = low + (vKid.b || 0);
		if (low <= index && index <= nextLow)
		{
			i = _VirtualDom_addDomNodesHelp(childNodes[j], vKid, patches, i, low, nextLow, eventNode);
			if (!(patch = patches[i]) || (index = patch.r) > high)
			{
				return i;
			}
		}
		low = nextLow;
	}
	return i;
}



// APPLY PATCHES


function _VirtualDom_applyPatches(rootDomNode, oldVirtualNode, patches, eventNode)
{
	if (patches.length === 0)
	{
		return rootDomNode;
	}

	_VirtualDom_addDomNodes(rootDomNode, oldVirtualNode, patches, eventNode);
	return _VirtualDom_applyPatchesHelp(rootDomNode, patches);
}

function _VirtualDom_applyPatchesHelp(rootDomNode, patches)
{
	for (var i = 0; i < patches.length; i++)
	{
		var patch = patches[i];
		var localDomNode = patch.t
		var newNode = _VirtualDom_applyPatch(localDomNode, patch);
		if (localDomNode === rootDomNode)
		{
			rootDomNode = newNode;
		}
	}
	return rootDomNode;
}

function _VirtualDom_applyPatch(domNode, patch)
{
	switch (patch.$)
	{
		case 0:
			return _VirtualDom_applyPatchRedraw(domNode, patch.s, patch.u);

		case 4:
			_VirtualDom_applyFacts(domNode, patch.u, patch.s);
			return domNode;

		case 3:
			domNode.replaceData(0, domNode.length, patch.s);
			return domNode;

		case 1:
			return _VirtualDom_applyPatchesHelp(domNode, patch.s);

		case 2:
			if (domNode.elm_event_node_ref)
			{
				domNode.elm_event_node_ref.j = patch.s;
			}
			else
			{
				domNode.elm_event_node_ref = { j: patch.s, p: patch.u };
			}
			return domNode;

		case 6:
			var data = patch.s;
			for (var i = 0; i < data.i; i++)
			{
				domNode.removeChild(domNode.childNodes[data.v]);
			}
			return domNode;

		case 7:
			var data = patch.s;
			var kids = data.e;
			var i = data.v;
			var theEnd = domNode.childNodes[i];
			for (; i < kids.length; i++)
			{
				domNode.insertBefore(_VirtualDom_render(kids[i], patch.u), theEnd);
			}
			return domNode;

		case 9:
			var data = patch.s;
			if (!data)
			{
				domNode.parentNode.removeChild(domNode);
				return domNode;
			}
			var entry = data.A;
			if (typeof entry.r !== 'undefined')
			{
				domNode.parentNode.removeChild(domNode);
			}
			entry.s = _VirtualDom_applyPatchesHelp(domNode, data.w);
			return domNode;

		case 8:
			return _VirtualDom_applyPatchReorder(domNode, patch);

		case 5:
			return patch.s(domNode);

		default:
			_Debug_crash(10); // 'Ran into an unknown patch!'
	}
}


function _VirtualDom_applyPatchRedraw(domNode, vNode, eventNode)
{
	var parentNode = domNode.parentNode;
	var newNode = _VirtualDom_render(vNode, eventNode);

	if (!newNode.elm_event_node_ref)
	{
		newNode.elm_event_node_ref = domNode.elm_event_node_ref;
	}

	if (parentNode && newNode !== domNode)
	{
		parentNode.replaceChild(newNode, domNode);
	}
	return newNode;
}


function _VirtualDom_applyPatchReorder(domNode, patch)
{
	var data = patch.s;

	// remove end inserts
	var frag = _VirtualDom_applyPatchReorderEndInsertsHelp(data.y, patch);

	// removals
	domNode = _VirtualDom_applyPatchesHelp(domNode, data.w);

	// inserts
	var inserts = data.x;
	for (var i = 0; i < inserts.length; i++)
	{
		var insert = inserts[i];
		var entry = insert.A;
		var node = entry.c === 2
			? entry.s
			: _VirtualDom_render(entry.z, patch.u);
		domNode.insertBefore(node, domNode.childNodes[insert.r]);
	}

	// add end inserts
	if (frag)
	{
		_VirtualDom_appendChild(domNode, frag);
	}

	return domNode;
}


function _VirtualDom_applyPatchReorderEndInsertsHelp(endInserts, patch)
{
	if (!endInserts)
	{
		return;
	}

	var frag = _VirtualDom_doc.createDocumentFragment();
	for (var i = 0; i < endInserts.length; i++)
	{
		var insert = endInserts[i];
		var entry = insert.A;
		_VirtualDom_appendChild(frag, entry.c === 2
			? entry.s
			: _VirtualDom_render(entry.z, patch.u)
		);
	}
	return frag;
}


function _VirtualDom_virtualize(node)
{
	// TEXT NODES

	if (node.nodeType === 3)
	{
		return _VirtualDom_text(node.textContent);
	}


	// WEIRD NODES

	if (node.nodeType !== 1)
	{
		return _VirtualDom_text('');
	}


	// ELEMENT NODES

	var attrList = _List_Nil;
	var attrs = node.attributes;
	for (var i = attrs.length; i--; )
	{
		var attr = attrs[i];
		var name = attr.name;
		var value = attr.value;
		attrList = _List_Cons( A2(_VirtualDom_attribute, name, value), attrList );
	}

	var tag = node.tagName.toLowerCase();
	var kidList = _List_Nil;
	var kids = node.childNodes;

	for (var i = kids.length; i--; )
	{
		kidList = _List_Cons(_VirtualDom_virtualize(kids[i]), kidList);
	}
	return A3(_VirtualDom_node, tag, attrList, kidList);
}

function _VirtualDom_dekey(keyedNode)
{
	var keyedKids = keyedNode.e;
	var len = keyedKids.length;
	var kids = new Array(len);
	for (var i = 0; i < len; i++)
	{
		kids[i] = keyedKids[i].b;
	}

	return {
		$: 1,
		c: keyedNode.c,
		d: keyedNode.d,
		e: kids,
		f: keyedNode.f,
		b: keyedNode.b
	};
}




// ELEMENT


var _Debugger_element;

var _Browser_element = _Debugger_element || F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function(sendToApp, initialModel) {
			var view = impl.view;
			/**_UNUSED/
			var domNode = args['node'];
			//*/
			/**/
			var domNode = args && args['node'] ? args['node'] : _Debug_crash(0);
			//*/
			var currNode = _VirtualDom_virtualize(domNode);

			return _Browser_makeAnimator(initialModel, function(model)
			{
				var nextNode = view(model);
				var patches = _VirtualDom_diff(currNode, nextNode);
				domNode = _VirtualDom_applyPatches(domNode, currNode, patches, sendToApp);
				currNode = nextNode;
			});
		}
	);
});



// DOCUMENT


var _Debugger_document;

var _Browser_document = _Debugger_document || F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function(sendToApp, initialModel) {
			var divertHrefToApp = impl.setup && impl.setup(sendToApp)
			var view = impl.view;
			var title = _VirtualDom_doc.title;
			var bodyNode = _VirtualDom_doc.body;
			var currNode = _VirtualDom_virtualize(bodyNode);
			return _Browser_makeAnimator(initialModel, function(model)
			{
				_VirtualDom_divertHrefToApp = divertHrefToApp;
				var doc = view(model);
				var nextNode = _VirtualDom_node('body')(_List_Nil)(doc.body);
				var patches = _VirtualDom_diff(currNode, nextNode);
				bodyNode = _VirtualDom_applyPatches(bodyNode, currNode, patches, sendToApp);
				currNode = nextNode;
				_VirtualDom_divertHrefToApp = 0;
				(title !== doc.title) && (_VirtualDom_doc.title = title = doc.title);
			});
		}
	);
});



// ANIMATION


var _Browser_cancelAnimationFrame =
	typeof cancelAnimationFrame !== 'undefined'
		? cancelAnimationFrame
		: function(id) { clearTimeout(id); };

var _Browser_requestAnimationFrame =
	typeof requestAnimationFrame !== 'undefined'
		? requestAnimationFrame
		: function(callback) { return setTimeout(callback, 1000 / 60); };


function _Browser_makeAnimator(model, draw)
{
	draw(model);

	var state = 0;

	function updateIfNeeded()
	{
		state = state === 1
			? 0
			: ( _Browser_requestAnimationFrame(updateIfNeeded), draw(model), 1 );
	}

	return function(nextModel, isSync)
	{
		model = nextModel;

		isSync
			? ( draw(model),
				state === 2 && (state = 1)
				)
			: ( state === 0 && _Browser_requestAnimationFrame(updateIfNeeded),
				state = 2
				);
	};
}



// APPLICATION


function _Browser_application(impl)
{
	var onUrlChange = impl.onUrlChange;
	var onUrlRequest = impl.onUrlRequest;
	var key = function() { key.a(onUrlChange(_Browser_getUrl())); };

	return _Browser_document({
		setup: function(sendToApp)
		{
			key.a = sendToApp;
			_Browser_window.addEventListener('popstate', key);
			_Browser_window.navigator.userAgent.indexOf('Trident') < 0 || _Browser_window.addEventListener('hashchange', key);

			return F2(function(domNode, event)
			{
				if (!event.ctrlKey && !event.metaKey && !event.shiftKey && event.button < 1 && !domNode.target && !domNode.hasAttribute('download'))
				{
					event.preventDefault();
					var href = domNode.href;
					var curr = _Browser_getUrl();
					var next = elm$url$Url$fromString(href).a;
					sendToApp(onUrlRequest(
						(next
							&& curr.protocol === next.protocol
							&& curr.host === next.host
							&& curr.port_.a === next.port_.a
						)
							? elm$browser$Browser$Internal(next)
							: elm$browser$Browser$External(href)
					));
				}
			});
		},
		init: function(flags)
		{
			return A3(impl.init, flags, _Browser_getUrl(), key);
		},
		view: impl.view,
		update: impl.update,
		subscriptions: impl.subscriptions
	});
}

function _Browser_getUrl()
{
	return elm$url$Url$fromString(_VirtualDom_doc.location.href).a || _Debug_crash(1);
}

var _Browser_go = F2(function(key, n)
{
	return A2(elm$core$Task$perform, elm$core$Basics$never, _Scheduler_binding(function() {
		n && history.go(n);
		key();
	}));
});

var _Browser_pushUrl = F2(function(key, url)
{
	return A2(elm$core$Task$perform, elm$core$Basics$never, _Scheduler_binding(function() {
		history.pushState({}, '', url);
		key();
	}));
});

var _Browser_replaceUrl = F2(function(key, url)
{
	return A2(elm$core$Task$perform, elm$core$Basics$never, _Scheduler_binding(function() {
		history.replaceState({}, '', url);
		key();
	}));
});



// GLOBAL EVENTS


var _Browser_fakeNode = { addEventListener: function() {}, removeEventListener: function() {} };
var _Browser_doc = typeof document !== 'undefined' ? document : _Browser_fakeNode;
var _Browser_window = typeof window !== 'undefined' ? window : _Browser_fakeNode;

var _Browser_on = F3(function(node, eventName, sendToSelf)
{
	return _Scheduler_spawn(_Scheduler_binding(function(callback)
	{
		function handler(event)	{ _Scheduler_rawSpawn(sendToSelf(event)); }
		node.addEventListener(eventName, handler, _VirtualDom_passiveSupported && { passive: true });
		return function() { node.removeEventListener(eventName, handler); };
	}));
});

var _Browser_decodeEvent = F2(function(decoder, event)
{
	var result = _Json_runHelp(decoder, event);
	return elm$core$Result$isOk(result) ? elm$core$Maybe$Just(result.a) : elm$core$Maybe$Nothing;
});



// PAGE VISIBILITY


function _Browser_visibilityInfo()
{
	return (typeof _VirtualDom_doc.hidden !== 'undefined')
		? { hidden: 'hidden', change: 'visibilitychange' }
		:
	(typeof _VirtualDom_doc.mozHidden !== 'undefined')
		? { hidden: 'mozHidden', change: 'mozvisibilitychange' }
		:
	(typeof _VirtualDom_doc.msHidden !== 'undefined')
		? { hidden: 'msHidden', change: 'msvisibilitychange' }
		:
	(typeof _VirtualDom_doc.webkitHidden !== 'undefined')
		? { hidden: 'webkitHidden', change: 'webkitvisibilitychange' }
		: { hidden: 'hidden', change: 'visibilitychange' };
}



// ANIMATION FRAMES


function _Browser_rAF()
{
	return _Scheduler_binding(function(callback)
	{
		var id = _Browser_requestAnimationFrame(function() {
			callback(_Scheduler_succeed(Date.now()));
		});

		return function() {
			_Browser_cancelAnimationFrame(id);
		};
	});
}


function _Browser_now()
{
	return _Scheduler_binding(function(callback)
	{
		callback(_Scheduler_succeed(Date.now()));
	});
}



// DOM STUFF


function _Browser_withNode(id, doStuff)
{
	return _Scheduler_binding(function(callback)
	{
		_Browser_requestAnimationFrame(function() {
			var node = document.getElementById(id);
			callback(node
				? _Scheduler_succeed(doStuff(node))
				: _Scheduler_fail(elm$browser$Browser$Dom$NotFound(id))
			);
		});
	});
}


function _Browser_withWindow(doStuff)
{
	return _Scheduler_binding(function(callback)
	{
		_Browser_requestAnimationFrame(function() {
			callback(_Scheduler_succeed(doStuff()));
		});
	});
}


// FOCUS and BLUR


var _Browser_call = F2(function(functionName, id)
{
	return _Browser_withNode(id, function(node) {
		node[functionName]();
		return _Utils_Tuple0;
	});
});



// WINDOW VIEWPORT


function _Browser_getViewport()
{
	return {
		scene: _Browser_getScene(),
		viewport: {
			x: _Browser_window.pageXOffset,
			y: _Browser_window.pageYOffset,
			width: _Browser_doc.documentElement.clientWidth,
			height: _Browser_doc.documentElement.clientHeight
		}
	};
}

function _Browser_getScene()
{
	var body = _Browser_doc.body;
	var elem = _Browser_doc.documentElement;
	return {
		width: Math.max(body.scrollWidth, body.offsetWidth, elem.scrollWidth, elem.offsetWidth, elem.clientWidth),
		height: Math.max(body.scrollHeight, body.offsetHeight, elem.scrollHeight, elem.offsetHeight, elem.clientHeight)
	};
}

var _Browser_setViewport = F2(function(x, y)
{
	return _Browser_withWindow(function()
	{
		_Browser_window.scroll(x, y);
		return _Utils_Tuple0;
	});
});



// ELEMENT VIEWPORT


function _Browser_getViewportOf(id)
{
	return _Browser_withNode(id, function(node)
	{
		return {
			scene: {
				width: node.scrollWidth,
				height: node.scrollHeight
			},
			viewport: {
				x: node.scrollLeft,
				y: node.scrollTop,
				width: node.clientWidth,
				height: node.clientHeight
			}
		};
	});
}


var _Browser_setViewportOf = F3(function(id, x, y)
{
	return _Browser_withNode(id, function(node)
	{
		node.scrollLeft = x;
		node.scrollTop = y;
		return _Utils_Tuple0;
	});
});



// ELEMENT


function _Browser_getElement(id)
{
	return _Browser_withNode(id, function(node)
	{
		var rect = node.getBoundingClientRect();
		var x = _Browser_window.pageXOffset;
		var y = _Browser_window.pageYOffset;
		return {
			scene: _Browser_getScene(),
			viewport: {
				x: x,
				y: y,
				width: _Browser_doc.documentElement.clientWidth,
				height: _Browser_doc.documentElement.clientHeight
			},
			element: {
				x: x + rect.left,
				y: y + rect.top,
				width: rect.width,
				height: rect.height
			}
		};
	});
}



// LOAD and RELOAD


function _Browser_reload(skipCache)
{
	return A2(elm$core$Task$perform, elm$core$Basics$never, _Scheduler_binding(function(callback)
	{
		_VirtualDom_doc.location.reload(skipCache);
	}));
}

function _Browser_load(url)
{
	return A2(elm$core$Task$perform, elm$core$Basics$never, _Scheduler_binding(function(callback)
	{
		try
		{
			_Browser_window.location = url;
		}
		catch(err)
		{
			// Only Firefox can throw a NS_ERROR_MALFORMED_URI exception here.
			// Other browsers reload the page, so let's be consistent about that.
			_VirtualDom_doc.location.reload(false);
		}
	}));
}
var elm$core$Basics$True = {$: 'True'};
var author$project$LabelProcessor$emptyElement = {classes: '', endingTag: true, htmlAttributes: '', id: '', name: ''};
var elm$core$Basics$EQ = {$: 'EQ'};
var elm$core$Basics$LT = {$: 'LT'};
var elm$core$Elm$JsArray$foldr = _JsArray_foldr;
var elm$core$Array$foldr = F3(
	function (func, baseCase, _n0) {
		var tree = _n0.c;
		var tail = _n0.d;
		var helper = F2(
			function (node, acc) {
				if (node.$ === 'SubTree') {
					var subTree = node.a;
					return A3(elm$core$Elm$JsArray$foldr, helper, acc, subTree);
				} else {
					var values = node.a;
					return A3(elm$core$Elm$JsArray$foldr, func, acc, values);
				}
			});
		return A3(
			elm$core$Elm$JsArray$foldr,
			helper,
			A3(elm$core$Elm$JsArray$foldr, func, baseCase, tail),
			tree);
	});
var elm$core$List$cons = _List_cons;
var elm$core$Array$toList = function (array) {
	return A3(elm$core$Array$foldr, elm$core$List$cons, _List_Nil, array);
};
var elm$core$Basics$GT = {$: 'GT'};
var elm$core$Dict$foldr = F3(
	function (func, acc, t) {
		foldr:
		while (true) {
			if (t.$ === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var key = t.b;
				var value = t.c;
				var left = t.d;
				var right = t.e;
				var $temp$func = func,
					$temp$acc = A3(
					func,
					key,
					value,
					A3(elm$core$Dict$foldr, func, acc, right)),
					$temp$t = left;
				func = $temp$func;
				acc = $temp$acc;
				t = $temp$t;
				continue foldr;
			}
		}
	});
var elm$core$Dict$toList = function (dict) {
	return A3(
		elm$core$Dict$foldr,
		F3(
			function (key, value, list) {
				return A2(
					elm$core$List$cons,
					_Utils_Tuple2(key, value),
					list);
			}),
		_List_Nil,
		dict);
};
var elm$core$Dict$keys = function (dict) {
	return A3(
		elm$core$Dict$foldr,
		F3(
			function (key, value, keyList) {
				return A2(elm$core$List$cons, key, keyList);
			}),
		_List_Nil,
		dict);
};
var elm$core$Set$toList = function (_n0) {
	var dict = _n0.a;
	return elm$core$Dict$keys(dict);
};
var author$project$LabelProcessor$initialLPModel = {firstCharacter: '', labelElement: author$project$LabelProcessor$emptyElement, labelElements: _List_Nil, restOfCharacters: ''};
var elm$core$Basics$lt = _Utils_lt;
var elm$core$Maybe$Just = function (a) {
	return {$: 'Just', a: a};
};
var elm$core$Maybe$Nothing = {$: 'Nothing'};
var elm$core$String$length = _String_length;
var elm$core$String$slice = _String_slice;
var elm$core$String$dropLeft = F2(
	function (n, string) {
		return (n < 1) ? string : A3(
			elm$core$String$slice,
			n,
			elm$core$String$length(string),
			string);
	});
var elm$core$String$left = F2(
	function (n, string) {
		return (n < 1) ? '' : A3(elm$core$String$slice, 0, n, string);
	});
var author$project$LabelProcessor$dropOneCharacter = function (model) {
	return _Utils_update(
		model,
		{
			firstCharacter: A2(elm$core$String$left, 1, model.restOfCharacters),
			restOfCharacters: A2(elm$core$String$dropLeft, 1, model.restOfCharacters)
		});
};
var elm$core$Basics$add = _Basics_add;
var elm$core$Basics$gt = _Utils_gt;
var elm$core$List$foldl = F3(
	function (func, acc, list) {
		foldl:
		while (true) {
			if (!list.b) {
				return acc;
			} else {
				var x = list.a;
				var xs = list.b;
				var $temp$func = func,
					$temp$acc = A2(func, x, acc),
					$temp$list = xs;
				func = $temp$func;
				acc = $temp$acc;
				list = $temp$list;
				continue foldl;
			}
		}
	});
var elm$core$List$reverse = function (list) {
	return A3(elm$core$List$foldl, elm$core$List$cons, _List_Nil, list);
};
var elm$core$List$foldrHelper = F4(
	function (fn, acc, ctr, ls) {
		if (!ls.b) {
			return acc;
		} else {
			var a = ls.a;
			var r1 = ls.b;
			if (!r1.b) {
				return A2(fn, a, acc);
			} else {
				var b = r1.a;
				var r2 = r1.b;
				if (!r2.b) {
					return A2(
						fn,
						a,
						A2(fn, b, acc));
				} else {
					var c = r2.a;
					var r3 = r2.b;
					if (!r3.b) {
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(fn, c, acc)));
					} else {
						var d = r3.a;
						var r4 = r3.b;
						var res = (ctr > 500) ? A3(
							elm$core$List$foldl,
							fn,
							acc,
							elm$core$List$reverse(r4)) : A4(elm$core$List$foldrHelper, fn, acc, ctr + 1, r4);
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(
									fn,
									c,
									A2(fn, d, res))));
					}
				}
			}
		}
	});
var elm$core$List$foldr = F3(
	function (fn, acc, ls) {
		return A4(elm$core$List$foldrHelper, fn, acc, 0, ls);
	});
var elm$core$List$append = F2(
	function (xs, ys) {
		if (!ys.b) {
			return xs;
		} else {
			return A3(elm$core$List$foldr, elm$core$List$cons, ys, xs);
		}
	});
var author$project$LabelProcessor$finalizeElement = function (model) {
	return _Utils_update(
		model,
		{
			labelElement: author$project$LabelProcessor$emptyElement,
			labelElements: A2(
				elm$core$List$append,
				model.labelElements,
				_List_fromArray(
					[model.labelElement]))
		});
};
var elm$core$Basics$False = {$: 'False'};
var elm$core$Basics$eq = _Utils_equal;
var author$project$LabelProcessor$isEndOfHtmlAttribute = function (model) {
	return (model.firstCharacter === ']') ? true : false;
};
var author$project$LabelProcessor$isLastCharacter = function (model) {
	return !elm$core$String$length(model.restOfCharacters);
};
var elm$core$Basics$apR = F2(
	function (x, f) {
		return f(x);
	});
var elm$core$String$trim = _String_trim;
var author$project$LabelProcessor$isStringWhitespace = function (string) {
	return (!elm$core$String$length(string)) ? false : ((!elm$core$String$length(
		elm$core$String$trim(string))) ? true : false);
};
var elm$core$Basics$and = _Basics_and;
var elm$core$Basics$or = _Basics_or;
var author$project$LabelProcessor$isEndingTag = function (model) {
	var secondCharacter = A2(elm$core$String$left, 1, model.restOfCharacters);
	return ((model.firstCharacter === '.') && (author$project$LabelProcessor$isStringWhitespace(secondCharacter) || author$project$LabelProcessor$isLastCharacter(model))) ? true : false;
};
var author$project$LabelProcessor$isStartOfClass = function (model) {
	var secondCharacter = A2(elm$core$String$left, 1, model.restOfCharacters);
	return ((model.firstCharacter === '.') && ((!author$project$LabelProcessor$isStringWhitespace(secondCharacter)) && (!author$project$LabelProcessor$isLastCharacter(model)))) ? true : false;
};
var author$project$LabelProcessor$isStartOfHtmlAttribute = function (model) {
	return (model.firstCharacter === '[') ? true : false;
};
var author$project$LabelProcessor$isStartOfId = function (model) {
	var secondCharacter = A2(elm$core$String$left, 1, model.restOfCharacters);
	return ((model.firstCharacter === '#') && ((!author$project$LabelProcessor$isStringWhitespace(secondCharacter)) && (!author$project$LabelProcessor$isLastCharacter(model)))) ? true : false;
};
var author$project$LabelProcessor$isWhitespace = function (model) {
	return author$project$LabelProcessor$isStringWhitespace(model.firstCharacter);
};
var author$project$LabelProcessor$isEndOfId = function (model) {
	return (author$project$LabelProcessor$isWhitespace(model) || (author$project$LabelProcessor$isStartOfClass(model) || (author$project$LabelProcessor$isStartOfId(model) || (author$project$LabelProcessor$isStartOfHtmlAttribute(model) || author$project$LabelProcessor$isEndingTag(model))))) ? true : false;
};
var author$project$LabelProcessor$isEndOfName = function (model) {
	return (author$project$LabelProcessor$isWhitespace(model) || (author$project$LabelProcessor$isStartOfClass(model) || (author$project$LabelProcessor$isStartOfId(model) || (author$project$LabelProcessor$isStartOfHtmlAttribute(model) || author$project$LabelProcessor$isEndingTag(model))))) ? true : false;
};
var elm$core$Basics$append = _Utils_append;
var author$project$LabelProcessor$processClass = F2(
	function (model, isfirstCharacterOfClass) {
		processClass:
		while (true) {
			var prefix = (isfirstCharacterOfClass && (elm$core$String$length(model.labelElement.classes) > 0)) ? ' ' : '';
			var currentElement = model.labelElement;
			var newElement = _Utils_update(
				currentElement,
				{
					classes: _Utils_ap(
						model.labelElement.classes,
						_Utils_ap(prefix, model.firstCharacter))
				});
			var newModel = author$project$LabelProcessor$dropOneCharacter(
				_Utils_update(
					model,
					{labelElement: newElement}));
			if (author$project$LabelProcessor$isEndOfId(model)) {
				return author$project$LabelProcessor$processLabelStep(model);
			} else {
				if (author$project$LabelProcessor$isLastCharacter(model)) {
					return author$project$LabelProcessor$processLabelStep(newModel);
				} else {
					var $temp$model = newModel,
						$temp$isfirstCharacterOfClass = false;
					model = $temp$model;
					isfirstCharacterOfClass = $temp$isfirstCharacterOfClass;
					continue processClass;
				}
			}
		}
	});
var author$project$LabelProcessor$processEndingTag = function (model) {
	var currentElement = model.labelElement;
	var newElement = _Utils_update(
		currentElement,
		{endingTag: false});
	var newModel = _Utils_update(
		model,
		{labelElement: newElement});
	return author$project$LabelProcessor$processLabelStep(newModel);
};
var author$project$LabelProcessor$processHtmlAttribute = function (model) {
	processHtmlAttribute:
	while (true) {
		var currentElement = model.labelElement;
		var newElement = _Utils_update(
			currentElement,
			{
				htmlAttributes: _Utils_ap(model.labelElement.htmlAttributes, model.firstCharacter)
			});
		var newModel = author$project$LabelProcessor$dropOneCharacter(
			_Utils_update(
				model,
				{labelElement: newElement}));
		if (author$project$LabelProcessor$isEndOfHtmlAttribute(model)) {
			return author$project$LabelProcessor$processLabelStep(
				author$project$LabelProcessor$dropOneCharacter(model));
		} else {
			if (author$project$LabelProcessor$isLastCharacter(model)) {
				return author$project$LabelProcessor$processLabelStep(newModel);
			} else {
				var $temp$model = newModel;
				model = $temp$model;
				continue processHtmlAttribute;
			}
		}
	}
};
var author$project$LabelProcessor$processId = function (model) {
	processId:
	while (true) {
		var currentElement = model.labelElement;
		var newElement = _Utils_update(
			currentElement,
			{
				id: _Utils_ap(model.labelElement.id, model.firstCharacter)
			});
		var newModel = author$project$LabelProcessor$dropOneCharacter(
			_Utils_update(
				model,
				{labelElement: newElement}));
		if (author$project$LabelProcessor$isEndOfId(model)) {
			return author$project$LabelProcessor$processLabelStep(model);
		} else {
			if (author$project$LabelProcessor$isLastCharacter(model)) {
				return author$project$LabelProcessor$processLabelStep(newModel);
			} else {
				var $temp$model = newModel;
				model = $temp$model;
				continue processId;
			}
		}
	}
};
var author$project$LabelProcessor$processLabelStep = function (model) {
	processLabelStep:
	while (true) {
		if (!elm$core$String$length(model.firstCharacter)) {
			return author$project$LabelProcessor$finalizeElement(model);
		} else {
			if (author$project$LabelProcessor$isWhitespace(model)) {
				var $temp$model = author$project$LabelProcessor$dropOneCharacter(
					author$project$LabelProcessor$finalizeElement(model));
				model = $temp$model;
				continue processLabelStep;
			} else {
				if (author$project$LabelProcessor$isStartOfClass(model)) {
					return A2(
						author$project$LabelProcessor$processClass,
						author$project$LabelProcessor$dropOneCharacter(model),
						true);
				} else {
					if (author$project$LabelProcessor$isStartOfId(model)) {
						return author$project$LabelProcessor$processId(
							author$project$LabelProcessor$dropOneCharacter(model));
					} else {
						if (author$project$LabelProcessor$isStartOfHtmlAttribute(model)) {
							return author$project$LabelProcessor$processHtmlAttribute(
								author$project$LabelProcessor$dropOneCharacter(model));
						} else {
							if (author$project$LabelProcessor$isEndingTag(model)) {
								return author$project$LabelProcessor$processEndingTag(
									author$project$LabelProcessor$dropOneCharacter(model));
							} else {
								return author$project$LabelProcessor$processName(model);
							}
						}
					}
				}
			}
		}
	}
};
var author$project$LabelProcessor$processName = function (model) {
	processName:
	while (true) {
		var currentElement = model.labelElement;
		var newElement = _Utils_update(
			currentElement,
			{
				name: _Utils_ap(model.labelElement.name, model.firstCharacter)
			});
		var newModel = author$project$LabelProcessor$dropOneCharacter(
			_Utils_update(
				model,
				{labelElement: newElement}));
		if (author$project$LabelProcessor$isEndOfName(model)) {
			return author$project$LabelProcessor$processLabelStep(model);
		} else {
			if (author$project$LabelProcessor$isLastCharacter(model)) {
				return author$project$LabelProcessor$processLabelStep(newModel);
			} else {
				var $temp$model = newModel;
				model = $temp$model;
				continue processName;
			}
		}
	}
};
var author$project$LabelProcessor$processLabel = function (label) {
	var model = _Utils_update(
		author$project$LabelProcessor$initialLPModel,
		{
			firstCharacter: A2(elm$core$String$left, 1, label),
			restOfCharacters: A2(elm$core$String$dropLeft, 1, label)
		});
	return author$project$LabelProcessor$processLabelStep(model).labelElements;
};
var author$project$Types$Box = function (a) {
	return {$: 'Box', a: a};
};
var elm$core$Basics$identity = function (x) {
	return x;
};
var elm$core$Maybe$withDefault = F2(
	function (_default, maybe) {
		if (maybe.$ === 'Just') {
			var value = maybe.a;
			return value;
		} else {
			return _default;
		}
	});
var author$project$Box$generateBox = F5(
	function (id, label, content, parent, type_) {
		return author$project$Types$Box(
			{
				content: content,
				id: id,
				label: label,
				labelElements: author$project$LabelProcessor$processLabel(
					A2(elm$core$Maybe$withDefault, '', label)),
				parent: parent,
				type_: type_
			});
	});
var author$project$Types$LiquidBox = {$: 'LiquidBox'};
var author$project$Types$SolidBox = {$: 'SolidBox'};
var elm$core$Array$branchFactor = 32;
var elm$core$Array$Array_elm_builtin = F4(
	function (a, b, c, d) {
		return {$: 'Array_elm_builtin', a: a, b: b, c: c, d: d};
	});
var elm$core$Basics$ceiling = _Basics_ceiling;
var elm$core$Basics$fdiv = _Basics_fdiv;
var elm$core$Basics$logBase = F2(
	function (base, number) {
		return _Basics_log(number) / _Basics_log(base);
	});
var elm$core$Basics$toFloat = _Basics_toFloat;
var elm$core$Array$shiftStep = elm$core$Basics$ceiling(
	A2(elm$core$Basics$logBase, 2, elm$core$Array$branchFactor));
var elm$core$Elm$JsArray$empty = _JsArray_empty;
var elm$core$Array$empty = A4(elm$core$Array$Array_elm_builtin, 0, elm$core$Array$shiftStep, elm$core$Elm$JsArray$empty, elm$core$Elm$JsArray$empty);
var elm$core$Array$Leaf = function (a) {
	return {$: 'Leaf', a: a};
};
var elm$core$Array$SubTree = function (a) {
	return {$: 'SubTree', a: a};
};
var elm$core$Elm$JsArray$initializeFromList = _JsArray_initializeFromList;
var elm$core$Array$compressNodes = F2(
	function (nodes, acc) {
		compressNodes:
		while (true) {
			var _n0 = A2(elm$core$Elm$JsArray$initializeFromList, elm$core$Array$branchFactor, nodes);
			var node = _n0.a;
			var remainingNodes = _n0.b;
			var newAcc = A2(
				elm$core$List$cons,
				elm$core$Array$SubTree(node),
				acc);
			if (!remainingNodes.b) {
				return elm$core$List$reverse(newAcc);
			} else {
				var $temp$nodes = remainingNodes,
					$temp$acc = newAcc;
				nodes = $temp$nodes;
				acc = $temp$acc;
				continue compressNodes;
			}
		}
	});
var elm$core$Tuple$first = function (_n0) {
	var x = _n0.a;
	return x;
};
var elm$core$Array$treeFromBuilder = F2(
	function (nodeList, nodeListSize) {
		treeFromBuilder:
		while (true) {
			var newNodeSize = elm$core$Basics$ceiling(nodeListSize / elm$core$Array$branchFactor);
			if (newNodeSize === 1) {
				return A2(elm$core$Elm$JsArray$initializeFromList, elm$core$Array$branchFactor, nodeList).a;
			} else {
				var $temp$nodeList = A2(elm$core$Array$compressNodes, nodeList, _List_Nil),
					$temp$nodeListSize = newNodeSize;
				nodeList = $temp$nodeList;
				nodeListSize = $temp$nodeListSize;
				continue treeFromBuilder;
			}
		}
	});
var elm$core$Basics$apL = F2(
	function (f, x) {
		return f(x);
	});
var elm$core$Basics$floor = _Basics_floor;
var elm$core$Basics$max = F2(
	function (x, y) {
		return (_Utils_cmp(x, y) > 0) ? x : y;
	});
var elm$core$Basics$mul = _Basics_mul;
var elm$core$Basics$sub = _Basics_sub;
var elm$core$Elm$JsArray$length = _JsArray_length;
var elm$core$Array$builderToArray = F2(
	function (reverseNodeList, builder) {
		if (!builder.nodeListSize) {
			return A4(
				elm$core$Array$Array_elm_builtin,
				elm$core$Elm$JsArray$length(builder.tail),
				elm$core$Array$shiftStep,
				elm$core$Elm$JsArray$empty,
				builder.tail);
		} else {
			var treeLen = builder.nodeListSize * elm$core$Array$branchFactor;
			var depth = elm$core$Basics$floor(
				A2(elm$core$Basics$logBase, elm$core$Array$branchFactor, treeLen - 1));
			var correctNodeList = reverseNodeList ? elm$core$List$reverse(builder.nodeList) : builder.nodeList;
			var tree = A2(elm$core$Array$treeFromBuilder, correctNodeList, builder.nodeListSize);
			return A4(
				elm$core$Array$Array_elm_builtin,
				elm$core$Elm$JsArray$length(builder.tail) + treeLen,
				A2(elm$core$Basics$max, 5, depth * elm$core$Array$shiftStep),
				tree,
				builder.tail);
		}
	});
var elm$core$Basics$idiv = _Basics_idiv;
var elm$core$Elm$JsArray$initialize = _JsArray_initialize;
var elm$core$Array$initializeHelp = F5(
	function (fn, fromIndex, len, nodeList, tail) {
		initializeHelp:
		while (true) {
			if (fromIndex < 0) {
				return A2(
					elm$core$Array$builderToArray,
					false,
					{nodeList: nodeList, nodeListSize: (len / elm$core$Array$branchFactor) | 0, tail: tail});
			} else {
				var leaf = elm$core$Array$Leaf(
					A3(elm$core$Elm$JsArray$initialize, elm$core$Array$branchFactor, fromIndex, fn));
				var $temp$fn = fn,
					$temp$fromIndex = fromIndex - elm$core$Array$branchFactor,
					$temp$len = len,
					$temp$nodeList = A2(elm$core$List$cons, leaf, nodeList),
					$temp$tail = tail;
				fn = $temp$fn;
				fromIndex = $temp$fromIndex;
				len = $temp$len;
				nodeList = $temp$nodeList;
				tail = $temp$tail;
				continue initializeHelp;
			}
		}
	});
var elm$core$Basics$le = _Utils_le;
var elm$core$Basics$remainderBy = _Basics_remainderBy;
var elm$core$Array$initialize = F2(
	function (len, fn) {
		if (len <= 0) {
			return elm$core$Array$empty;
		} else {
			var tailLen = len % elm$core$Array$branchFactor;
			var tail = A3(elm$core$Elm$JsArray$initialize, tailLen, len - tailLen, fn);
			var initialFromIndex = (len - tailLen) - elm$core$Array$branchFactor;
			return A5(elm$core$Array$initializeHelp, fn, initialFromIndex, len, _List_Nil, tail);
		}
	});
var elm$core$Result$Err = function (a) {
	return {$: 'Err', a: a};
};
var elm$core$Result$Ok = function (a) {
	return {$: 'Ok', a: a};
};
var elm$core$Result$isOk = function (result) {
	if (result.$ === 'Ok') {
		return true;
	} else {
		return false;
	}
};
var elm$json$Json$Decode$Failure = F2(
	function (a, b) {
		return {$: 'Failure', a: a, b: b};
	});
var elm$json$Json$Decode$Field = F2(
	function (a, b) {
		return {$: 'Field', a: a, b: b};
	});
var elm$json$Json$Decode$Index = F2(
	function (a, b) {
		return {$: 'Index', a: a, b: b};
	});
var elm$json$Json$Decode$OneOf = function (a) {
	return {$: 'OneOf', a: a};
};
var elm$core$Char$toCode = _Char_toCode;
var elm$core$Char$isLower = function (_char) {
	var code = elm$core$Char$toCode(_char);
	return (97 <= code) && (code <= 122);
};
var elm$core$Char$isUpper = function (_char) {
	var code = elm$core$Char$toCode(_char);
	return (code <= 90) && (65 <= code);
};
var elm$core$Char$isAlpha = function (_char) {
	return elm$core$Char$isLower(_char) || elm$core$Char$isUpper(_char);
};
var elm$core$Char$isDigit = function (_char) {
	var code = elm$core$Char$toCode(_char);
	return (code <= 57) && (48 <= code);
};
var elm$core$Char$isAlphaNum = function (_char) {
	return elm$core$Char$isLower(_char) || (elm$core$Char$isUpper(_char) || elm$core$Char$isDigit(_char));
};
var elm$core$List$length = function (xs) {
	return A3(
		elm$core$List$foldl,
		F2(
			function (_n0, i) {
				return i + 1;
			}),
		0,
		xs);
};
var elm$core$List$map2 = _List_map2;
var elm$core$List$rangeHelp = F3(
	function (lo, hi, list) {
		rangeHelp:
		while (true) {
			if (_Utils_cmp(lo, hi) < 1) {
				var $temp$lo = lo,
					$temp$hi = hi - 1,
					$temp$list = A2(elm$core$List$cons, hi, list);
				lo = $temp$lo;
				hi = $temp$hi;
				list = $temp$list;
				continue rangeHelp;
			} else {
				return list;
			}
		}
	});
var elm$core$List$range = F2(
	function (lo, hi) {
		return A3(elm$core$List$rangeHelp, lo, hi, _List_Nil);
	});
var elm$core$List$indexedMap = F2(
	function (f, xs) {
		return A3(
			elm$core$List$map2,
			f,
			A2(
				elm$core$List$range,
				0,
				elm$core$List$length(xs) - 1),
			xs);
	});
var elm$core$String$all = _String_all;
var elm$core$String$fromInt = _String_fromNumber;
var elm$core$String$join = F2(
	function (sep, chunks) {
		return A2(
			_String_join,
			sep,
			_List_toArray(chunks));
	});
var elm$core$String$uncons = _String_uncons;
var elm$core$String$split = F2(
	function (sep, string) {
		return _List_fromArray(
			A2(_String_split, sep, string));
	});
var elm$json$Json$Decode$indent = function (str) {
	return A2(
		elm$core$String$join,
		'\n    ',
		A2(elm$core$String$split, '\n', str));
};
var elm$json$Json$Encode$encode = _Json_encode;
var elm$json$Json$Decode$errorOneOf = F2(
	function (i, error) {
		return '\n\n(' + (elm$core$String$fromInt(i + 1) + (') ' + elm$json$Json$Decode$indent(
			elm$json$Json$Decode$errorToString(error))));
	});
var elm$json$Json$Decode$errorToString = function (error) {
	return A2(elm$json$Json$Decode$errorToStringHelp, error, _List_Nil);
};
var elm$json$Json$Decode$errorToStringHelp = F2(
	function (error, context) {
		errorToStringHelp:
		while (true) {
			switch (error.$) {
				case 'Field':
					var f = error.a;
					var err = error.b;
					var isSimple = function () {
						var _n1 = elm$core$String$uncons(f);
						if (_n1.$ === 'Nothing') {
							return false;
						} else {
							var _n2 = _n1.a;
							var _char = _n2.a;
							var rest = _n2.b;
							return elm$core$Char$isAlpha(_char) && A2(elm$core$String$all, elm$core$Char$isAlphaNum, rest);
						}
					}();
					var fieldName = isSimple ? ('.' + f) : ('[\'' + (f + '\']'));
					var $temp$error = err,
						$temp$context = A2(elm$core$List$cons, fieldName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 'Index':
					var i = error.a;
					var err = error.b;
					var indexName = '[' + (elm$core$String$fromInt(i) + ']');
					var $temp$error = err,
						$temp$context = A2(elm$core$List$cons, indexName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 'OneOf':
					var errors = error.a;
					if (!errors.b) {
						return 'Ran into a Json.Decode.oneOf with no possibilities' + function () {
							if (!context.b) {
								return '!';
							} else {
								return ' at json' + A2(
									elm$core$String$join,
									'',
									elm$core$List$reverse(context));
							}
						}();
					} else {
						if (!errors.b.b) {
							var err = errors.a;
							var $temp$error = err,
								$temp$context = context;
							error = $temp$error;
							context = $temp$context;
							continue errorToStringHelp;
						} else {
							var starter = function () {
								if (!context.b) {
									return 'Json.Decode.oneOf';
								} else {
									return 'The Json.Decode.oneOf at json' + A2(
										elm$core$String$join,
										'',
										elm$core$List$reverse(context));
								}
							}();
							var introduction = starter + (' failed in the following ' + (elm$core$String$fromInt(
								elm$core$List$length(errors)) + ' ways:'));
							return A2(
								elm$core$String$join,
								'\n\n',
								A2(
									elm$core$List$cons,
									introduction,
									A2(elm$core$List$indexedMap, elm$json$Json$Decode$errorOneOf, errors)));
						}
					}
				default:
					var msg = error.a;
					var json = error.b;
					var introduction = function () {
						if (!context.b) {
							return 'Problem with the given value:\n\n';
						} else {
							return 'Problem with the value at json' + (A2(
								elm$core$String$join,
								'',
								elm$core$List$reverse(context)) + ':\n\n    ');
						}
					}();
					return introduction + (elm$json$Json$Decode$indent(
						A2(elm$json$Json$Encode$encode, 4, json)) + ('\n\n' + msg));
			}
		}
	});
var elm$json$Json$Decode$andThen = _Json_andThen;
var elm$json$Json$Decode$decodeString = _Json_runOnString;
var elm$json$Json$Decode$field = _Json_decodeField;
var elm$json$Json$Decode$int = _Json_decodeInt;
var elm$json$Json$Decode$list = _Json_decodeList;
var elm$json$Json$Decode$map5 = _Json_map5;
var elm$json$Json$Decode$map = _Json_map1;
var elm$json$Json$Decode$oneOf = _Json_oneOf;
var elm$json$Json$Decode$succeed = _Json_succeed;
var elm$json$Json$Decode$maybe = function (decoder) {
	return elm$json$Json$Decode$oneOf(
		_List_fromArray(
			[
				A2(elm$json$Json$Decode$map, elm$core$Maybe$Just, decoder),
				elm$json$Json$Decode$succeed(elm$core$Maybe$Nothing)
			]));
};
var elm$json$Json$Decode$string = _Json_decodeString;
var author$project$Box$jsonStringToDocument = function (jsonString) {
	var boxTypeDecoder = A2(
		elm$json$Json$Decode$field,
		'type',
		A2(
			elm$json$Json$Decode$andThen,
			function (typeString) {
				switch (typeString) {
					case 'solid_box':
						return elm$json$Json$Decode$succeed(author$project$Types$SolidBox);
					case 'liquid_box':
						return elm$json$Json$Decode$succeed(author$project$Types$LiquidBox);
					default:
						return elm$json$Json$Decode$succeed(author$project$Types$SolidBox);
				}
			},
			elm$json$Json$Decode$string));
	var boxParentDecoder = A2(elm$json$Json$Decode$field, 'parent', elm$json$Json$Decode$int);
	var boxLabelDecoder = A2(
		elm$json$Json$Decode$field,
		'label',
		A2(
			elm$json$Json$Decode$andThen,
			function (labelString) {
				return (!elm$core$String$length(labelString)) ? elm$json$Json$Decode$succeed(elm$core$Maybe$Nothing) : elm$json$Json$Decode$succeed(
					elm$core$Maybe$Just(labelString));
			},
			elm$json$Json$Decode$string));
	var boxIdDecoder = A2(elm$json$Json$Decode$field, 'id', elm$json$Json$Decode$int);
	var boxContentDecoder = A2(
		elm$json$Json$Decode$field,
		'content',
		elm$json$Json$Decode$maybe(elm$json$Json$Decode$string));
	var boxJsonDecoder = A6(elm$json$Json$Decode$map5, author$project$Box$generateBox, boxIdDecoder, boxLabelDecoder, boxContentDecoder, boxParentDecoder, boxTypeDecoder);
	var boxesJsonDecoder = elm$json$Json$Decode$list(boxJsonDecoder);
	var decodedListResult = A2(elm$json$Json$Decode$decodeString, boxesJsonDecoder, jsonString);
	if (decodedListResult.$ === 'Ok') {
		var listOfBoxes = decodedListResult.a;
		return listOfBoxes;
	} else {
		var err = decodedListResult.a;
		return _List_Nil;
	}
};
var author$project$Menu$menuItem = F2(
	function (name, machineName) {
		return {machineName: machineName, name: name};
	});
var author$project$Types$Default = {$: 'Default'};
var elm$core$Platform$Cmd$batch = _Platform_batch;
var elm$core$Platform$Cmd$none = elm$core$Platform$Cmd$batch(_List_Nil);
var author$project$State$initialModel = function (flags) {
	return _Utils_Tuple2(
		{
			csrfToken: flags.csrfToken,
			document: author$project$Box$jsonStringToDocument(flags.content),
			documentValidity: 0,
			duplicateSubjectId: elm$core$Maybe$Nothing,
			_export: '',
			importString: '',
			import_: false,
			menu: _List_fromArray(
				[
					A2(author$project$Menu$menuItem, '+ solid box', 'add_solid_box'),
					A2(author$project$Menu$menuItem, '+ liquid box', 'add_liquid_box'),
					A2(author$project$Menu$menuItem, 'edit box', 'edit_box'),
					A2(author$project$Menu$menuItem, 'duplicate box', 'duplicate_box'),
					A2(author$project$Menu$menuItem, 'move box', 'move_box'),
					A2(author$project$Menu$menuItem, '- box', 'remove_box'),
					A2(author$project$Menu$menuItem, 'import', 'import'),
					A2(author$project$Menu$menuItem, 'export', 'export'),
					A2(author$project$Menu$menuItem, 'view ODL', 'view_odl')
				]),
			menuMessage: elm$core$Maybe$Nothing,
			odlString: '',
			pageName: flags.pageName,
			pageTitle: flags.pageTitle,
			selectedBoxId: 0,
			status: author$project$Types$Default
		},
		elm$core$Platform$Cmd$none);
};
var author$project$Rest$keyDecoder = A2(elm$json$Json$Decode$field, 'key', elm$json$Json$Decode$string);
var elm$json$Json$Decode$bool = _Json_decodeBool;
var author$project$Rest$shiftKeyDecoder = A2(elm$json$Json$Decode$field, 'shiftKey', elm$json$Json$Decode$bool);
var author$project$Types$Down = {$: 'Down'};
var author$project$Types$KeyInteraction = F3(
	function (a, b, c) {
		return {$: 'KeyInteraction', a: a, b: b, c: c};
	});
var elm$browser$Browser$Events$Document = {$: 'Document'};
var elm$browser$Browser$Events$MySub = F3(
	function (a, b, c) {
		return {$: 'MySub', a: a, b: b, c: c};
	});
var elm$browser$Browser$Events$State = F2(
	function (subs, pids) {
		return {pids: pids, subs: subs};
	});
var elm$core$Dict$RBEmpty_elm_builtin = {$: 'RBEmpty_elm_builtin'};
var elm$core$Dict$empty = elm$core$Dict$RBEmpty_elm_builtin;
var elm$core$Task$succeed = _Scheduler_succeed;
var elm$browser$Browser$Events$init = elm$core$Task$succeed(
	A2(elm$browser$Browser$Events$State, _List_Nil, elm$core$Dict$empty));
var elm$browser$Browser$Events$nodeToKey = function (node) {
	if (node.$ === 'Document') {
		return 'd_';
	} else {
		return 'w_';
	}
};
var elm$browser$Browser$Events$addKey = function (sub) {
	var node = sub.a;
	var name = sub.b;
	return _Utils_Tuple2(
		_Utils_ap(
			elm$browser$Browser$Events$nodeToKey(node),
			name),
		sub);
};
var elm$browser$Browser$Events$Event = F2(
	function (key, event) {
		return {event: event, key: key};
	});
var elm$core$Platform$sendToSelf = _Platform_sendToSelf;
var elm$core$Task$andThen = _Scheduler_andThen;
var elm$core$Task$map = F2(
	function (func, taskA) {
		return A2(
			elm$core$Task$andThen,
			function (a) {
				return elm$core$Task$succeed(
					func(a));
			},
			taskA);
	});
var elm$browser$Browser$External = function (a) {
	return {$: 'External', a: a};
};
var elm$browser$Browser$Internal = function (a) {
	return {$: 'Internal', a: a};
};
var elm$browser$Browser$Dom$NotFound = function (a) {
	return {$: 'NotFound', a: a};
};
var elm$core$Basics$never = function (_n0) {
	never:
	while (true) {
		var nvr = _n0.a;
		var $temp$_n0 = nvr;
		_n0 = $temp$_n0;
		continue never;
	}
};
var elm$core$Task$Perform = function (a) {
	return {$: 'Perform', a: a};
};
var elm$core$Task$init = elm$core$Task$succeed(_Utils_Tuple0);
var elm$core$List$map = F2(
	function (f, xs) {
		return A3(
			elm$core$List$foldr,
			F2(
				function (x, acc) {
					return A2(
						elm$core$List$cons,
						f(x),
						acc);
				}),
			_List_Nil,
			xs);
	});
var elm$core$Task$map2 = F3(
	function (func, taskA, taskB) {
		return A2(
			elm$core$Task$andThen,
			function (a) {
				return A2(
					elm$core$Task$andThen,
					function (b) {
						return elm$core$Task$succeed(
							A2(func, a, b));
					},
					taskB);
			},
			taskA);
	});
var elm$core$Task$sequence = function (tasks) {
	return A3(
		elm$core$List$foldr,
		elm$core$Task$map2(elm$core$List$cons),
		elm$core$Task$succeed(_List_Nil),
		tasks);
};
var elm$core$Platform$sendToApp = _Platform_sendToApp;
var elm$core$Task$spawnCmd = F2(
	function (router, _n0) {
		var task = _n0.a;
		return _Scheduler_spawn(
			A2(
				elm$core$Task$andThen,
				elm$core$Platform$sendToApp(router),
				task));
	});
var elm$core$Task$onEffects = F3(
	function (router, commands, state) {
		return A2(
			elm$core$Task$map,
			function (_n0) {
				return _Utils_Tuple0;
			},
			elm$core$Task$sequence(
				A2(
					elm$core$List$map,
					elm$core$Task$spawnCmd(router),
					commands)));
	});
var elm$core$Task$onSelfMsg = F3(
	function (_n0, _n1, _n2) {
		return elm$core$Task$succeed(_Utils_Tuple0);
	});
var elm$core$Task$cmdMap = F2(
	function (tagger, _n0) {
		var task = _n0.a;
		return elm$core$Task$Perform(
			A2(elm$core$Task$map, tagger, task));
	});
_Platform_effectManagers['Task'] = _Platform_createManager(elm$core$Task$init, elm$core$Task$onEffects, elm$core$Task$onSelfMsg, elm$core$Task$cmdMap);
var elm$core$Task$command = _Platform_leaf('Task');
var elm$core$Task$perform = F2(
	function (toMessage, task) {
		return elm$core$Task$command(
			elm$core$Task$Perform(
				A2(elm$core$Task$map, toMessage, task)));
	});
var elm$json$Json$Decode$map2 = _Json_map2;
var elm$virtual_dom$VirtualDom$toHandlerInt = function (handler) {
	switch (handler.$) {
		case 'Normal':
			return 0;
		case 'MayStopPropagation':
			return 1;
		case 'MayPreventDefault':
			return 2;
		default:
			return 3;
	}
};
var elm$core$String$startsWith = _String_startsWith;
var elm$url$Url$Http = {$: 'Http'};
var elm$url$Url$Https = {$: 'Https'};
var elm$core$String$indexes = _String_indexes;
var elm$core$String$isEmpty = function (string) {
	return string === '';
};
var elm$core$String$contains = _String_contains;
var elm$core$String$toInt = _String_toInt;
var elm$url$Url$Url = F6(
	function (protocol, host, port_, path, query, fragment) {
		return {fragment: fragment, host: host, path: path, port_: port_, protocol: protocol, query: query};
	});
var elm$url$Url$chompBeforePath = F5(
	function (protocol, path, params, frag, str) {
		if (elm$core$String$isEmpty(str) || A2(elm$core$String$contains, '@', str)) {
			return elm$core$Maybe$Nothing;
		} else {
			var _n0 = A2(elm$core$String$indexes, ':', str);
			if (!_n0.b) {
				return elm$core$Maybe$Just(
					A6(elm$url$Url$Url, protocol, str, elm$core$Maybe$Nothing, path, params, frag));
			} else {
				if (!_n0.b.b) {
					var i = _n0.a;
					var _n1 = elm$core$String$toInt(
						A2(elm$core$String$dropLeft, i + 1, str));
					if (_n1.$ === 'Nothing') {
						return elm$core$Maybe$Nothing;
					} else {
						var port_ = _n1;
						return elm$core$Maybe$Just(
							A6(
								elm$url$Url$Url,
								protocol,
								A2(elm$core$String$left, i, str),
								port_,
								path,
								params,
								frag));
					}
				} else {
					return elm$core$Maybe$Nothing;
				}
			}
		}
	});
var elm$url$Url$chompBeforeQuery = F4(
	function (protocol, params, frag, str) {
		if (elm$core$String$isEmpty(str)) {
			return elm$core$Maybe$Nothing;
		} else {
			var _n0 = A2(elm$core$String$indexes, '/', str);
			if (!_n0.b) {
				return A5(elm$url$Url$chompBeforePath, protocol, '/', params, frag, str);
			} else {
				var i = _n0.a;
				return A5(
					elm$url$Url$chompBeforePath,
					protocol,
					A2(elm$core$String$dropLeft, i, str),
					params,
					frag,
					A2(elm$core$String$left, i, str));
			}
		}
	});
var elm$url$Url$chompBeforeFragment = F3(
	function (protocol, frag, str) {
		if (elm$core$String$isEmpty(str)) {
			return elm$core$Maybe$Nothing;
		} else {
			var _n0 = A2(elm$core$String$indexes, '?', str);
			if (!_n0.b) {
				return A4(elm$url$Url$chompBeforeQuery, protocol, elm$core$Maybe$Nothing, frag, str);
			} else {
				var i = _n0.a;
				return A4(
					elm$url$Url$chompBeforeQuery,
					protocol,
					elm$core$Maybe$Just(
						A2(elm$core$String$dropLeft, i + 1, str)),
					frag,
					A2(elm$core$String$left, i, str));
			}
		}
	});
var elm$url$Url$chompAfterProtocol = F2(
	function (protocol, str) {
		if (elm$core$String$isEmpty(str)) {
			return elm$core$Maybe$Nothing;
		} else {
			var _n0 = A2(elm$core$String$indexes, '#', str);
			if (!_n0.b) {
				return A3(elm$url$Url$chompBeforeFragment, protocol, elm$core$Maybe$Nothing, str);
			} else {
				var i = _n0.a;
				return A3(
					elm$url$Url$chompBeforeFragment,
					protocol,
					elm$core$Maybe$Just(
						A2(elm$core$String$dropLeft, i + 1, str)),
					A2(elm$core$String$left, i, str));
			}
		}
	});
var elm$url$Url$fromString = function (str) {
	return A2(elm$core$String$startsWith, 'http://', str) ? A2(
		elm$url$Url$chompAfterProtocol,
		elm$url$Url$Http,
		A2(elm$core$String$dropLeft, 7, str)) : (A2(elm$core$String$startsWith, 'https://', str) ? A2(
		elm$url$Url$chompAfterProtocol,
		elm$url$Url$Https,
		A2(elm$core$String$dropLeft, 8, str)) : elm$core$Maybe$Nothing);
};
var elm$browser$Browser$Events$spawn = F3(
	function (router, key, _n0) {
		var node = _n0.a;
		var name = _n0.b;
		var actualNode = function () {
			if (node.$ === 'Document') {
				return _Browser_doc;
			} else {
				return _Browser_window;
			}
		}();
		return A2(
			elm$core$Task$map,
			function (value) {
				return _Utils_Tuple2(key, value);
			},
			A3(
				_Browser_on,
				actualNode,
				name,
				function (event) {
					return A2(
						elm$core$Platform$sendToSelf,
						router,
						A2(elm$browser$Browser$Events$Event, key, event));
				}));
	});
var elm$core$Dict$Black = {$: 'Black'};
var elm$core$Dict$RBNode_elm_builtin = F5(
	function (a, b, c, d, e) {
		return {$: 'RBNode_elm_builtin', a: a, b: b, c: c, d: d, e: e};
	});
var elm$core$Basics$compare = _Utils_compare;
var elm$core$Dict$Red = {$: 'Red'};
var elm$core$Dict$balance = F5(
	function (color, key, value, left, right) {
		if ((right.$ === 'RBNode_elm_builtin') && (right.a.$ === 'Red')) {
			var _n1 = right.a;
			var rK = right.b;
			var rV = right.c;
			var rLeft = right.d;
			var rRight = right.e;
			if ((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) {
				var _n3 = left.a;
				var lK = left.b;
				var lV = left.c;
				var lLeft = left.d;
				var lRight = left.e;
				return A5(
					elm$core$Dict$RBNode_elm_builtin,
					elm$core$Dict$Red,
					key,
					value,
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Black, lK, lV, lLeft, lRight),
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Black, rK, rV, rLeft, rRight));
			} else {
				return A5(
					elm$core$Dict$RBNode_elm_builtin,
					color,
					rK,
					rV,
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Red, key, value, left, rLeft),
					rRight);
			}
		} else {
			if ((((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) && (left.d.$ === 'RBNode_elm_builtin')) && (left.d.a.$ === 'Red')) {
				var _n5 = left.a;
				var lK = left.b;
				var lV = left.c;
				var _n6 = left.d;
				var _n7 = _n6.a;
				var llK = _n6.b;
				var llV = _n6.c;
				var llLeft = _n6.d;
				var llRight = _n6.e;
				var lRight = left.e;
				return A5(
					elm$core$Dict$RBNode_elm_builtin,
					elm$core$Dict$Red,
					lK,
					lV,
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Black, llK, llV, llLeft, llRight),
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Black, key, value, lRight, right));
			} else {
				return A5(elm$core$Dict$RBNode_elm_builtin, color, key, value, left, right);
			}
		}
	});
var elm$core$Dict$insertHelp = F3(
	function (key, value, dict) {
		if (dict.$ === 'RBEmpty_elm_builtin') {
			return A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Red, key, value, elm$core$Dict$RBEmpty_elm_builtin, elm$core$Dict$RBEmpty_elm_builtin);
		} else {
			var nColor = dict.a;
			var nKey = dict.b;
			var nValue = dict.c;
			var nLeft = dict.d;
			var nRight = dict.e;
			var _n1 = A2(elm$core$Basics$compare, key, nKey);
			switch (_n1.$) {
				case 'LT':
					return A5(
						elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						A3(elm$core$Dict$insertHelp, key, value, nLeft),
						nRight);
				case 'EQ':
					return A5(elm$core$Dict$RBNode_elm_builtin, nColor, nKey, value, nLeft, nRight);
				default:
					return A5(
						elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						nLeft,
						A3(elm$core$Dict$insertHelp, key, value, nRight));
			}
		}
	});
var elm$core$Dict$insert = F3(
	function (key, value, dict) {
		var _n0 = A3(elm$core$Dict$insertHelp, key, value, dict);
		if ((_n0.$ === 'RBNode_elm_builtin') && (_n0.a.$ === 'Red')) {
			var _n1 = _n0.a;
			var k = _n0.b;
			var v = _n0.c;
			var l = _n0.d;
			var r = _n0.e;
			return A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Black, k, v, l, r);
		} else {
			var x = _n0;
			return x;
		}
	});
var elm$core$Dict$fromList = function (assocs) {
	return A3(
		elm$core$List$foldl,
		F2(
			function (_n0, dict) {
				var key = _n0.a;
				var value = _n0.b;
				return A3(elm$core$Dict$insert, key, value, dict);
			}),
		elm$core$Dict$empty,
		assocs);
};
var elm$core$Dict$foldl = F3(
	function (func, acc, dict) {
		foldl:
		while (true) {
			if (dict.$ === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var key = dict.b;
				var value = dict.c;
				var left = dict.d;
				var right = dict.e;
				var $temp$func = func,
					$temp$acc = A3(
					func,
					key,
					value,
					A3(elm$core$Dict$foldl, func, acc, left)),
					$temp$dict = right;
				func = $temp$func;
				acc = $temp$acc;
				dict = $temp$dict;
				continue foldl;
			}
		}
	});
var elm$core$Dict$merge = F6(
	function (leftStep, bothStep, rightStep, leftDict, rightDict, initialResult) {
		var stepState = F3(
			function (rKey, rValue, _n0) {
				stepState:
				while (true) {
					var list = _n0.a;
					var result = _n0.b;
					if (!list.b) {
						return _Utils_Tuple2(
							list,
							A3(rightStep, rKey, rValue, result));
					} else {
						var _n2 = list.a;
						var lKey = _n2.a;
						var lValue = _n2.b;
						var rest = list.b;
						if (_Utils_cmp(lKey, rKey) < 0) {
							var $temp$rKey = rKey,
								$temp$rValue = rValue,
								$temp$_n0 = _Utils_Tuple2(
								rest,
								A3(leftStep, lKey, lValue, result));
							rKey = $temp$rKey;
							rValue = $temp$rValue;
							_n0 = $temp$_n0;
							continue stepState;
						} else {
							if (_Utils_cmp(lKey, rKey) > 0) {
								return _Utils_Tuple2(
									list,
									A3(rightStep, rKey, rValue, result));
							} else {
								return _Utils_Tuple2(
									rest,
									A4(bothStep, lKey, lValue, rValue, result));
							}
						}
					}
				}
			});
		var _n3 = A3(
			elm$core$Dict$foldl,
			stepState,
			_Utils_Tuple2(
				elm$core$Dict$toList(leftDict),
				initialResult),
			rightDict);
		var leftovers = _n3.a;
		var intermediateResult = _n3.b;
		return A3(
			elm$core$List$foldl,
			F2(
				function (_n4, result) {
					var k = _n4.a;
					var v = _n4.b;
					return A3(leftStep, k, v, result);
				}),
			intermediateResult,
			leftovers);
	});
var elm$core$Dict$union = F2(
	function (t1, t2) {
		return A3(elm$core$Dict$foldl, elm$core$Dict$insert, t2, t1);
	});
var elm$core$Process$kill = _Scheduler_kill;
var elm$browser$Browser$Events$onEffects = F3(
	function (router, subs, state) {
		var stepRight = F3(
			function (key, sub, _n6) {
				var deads = _n6.a;
				var lives = _n6.b;
				var news = _n6.c;
				return _Utils_Tuple3(
					deads,
					lives,
					A2(
						elm$core$List$cons,
						A3(elm$browser$Browser$Events$spawn, router, key, sub),
						news));
			});
		var stepLeft = F3(
			function (_n4, pid, _n5) {
				var deads = _n5.a;
				var lives = _n5.b;
				var news = _n5.c;
				return _Utils_Tuple3(
					A2(elm$core$List$cons, pid, deads),
					lives,
					news);
			});
		var stepBoth = F4(
			function (key, pid, _n2, _n3) {
				var deads = _n3.a;
				var lives = _n3.b;
				var news = _n3.c;
				return _Utils_Tuple3(
					deads,
					A3(elm$core$Dict$insert, key, pid, lives),
					news);
			});
		var newSubs = A2(elm$core$List$map, elm$browser$Browser$Events$addKey, subs);
		var _n0 = A6(
			elm$core$Dict$merge,
			stepLeft,
			stepBoth,
			stepRight,
			state.pids,
			elm$core$Dict$fromList(newSubs),
			_Utils_Tuple3(_List_Nil, elm$core$Dict$empty, _List_Nil));
		var deadPids = _n0.a;
		var livePids = _n0.b;
		var makeNewPids = _n0.c;
		return A2(
			elm$core$Task$andThen,
			function (pids) {
				return elm$core$Task$succeed(
					A2(
						elm$browser$Browser$Events$State,
						newSubs,
						A2(
							elm$core$Dict$union,
							livePids,
							elm$core$Dict$fromList(pids))));
			},
			A2(
				elm$core$Task$andThen,
				function (_n1) {
					return elm$core$Task$sequence(makeNewPids);
				},
				elm$core$Task$sequence(
					A2(elm$core$List$map, elm$core$Process$kill, deadPids))));
	});
var elm$core$List$maybeCons = F3(
	function (f, mx, xs) {
		var _n0 = f(mx);
		if (_n0.$ === 'Just') {
			var x = _n0.a;
			return A2(elm$core$List$cons, x, xs);
		} else {
			return xs;
		}
	});
var elm$core$List$filterMap = F2(
	function (f, xs) {
		return A3(
			elm$core$List$foldr,
			elm$core$List$maybeCons(f),
			_List_Nil,
			xs);
	});
var elm$browser$Browser$Events$onSelfMsg = F3(
	function (router, _n0, state) {
		var key = _n0.key;
		var event = _n0.event;
		var toMessage = function (_n2) {
			var subKey = _n2.a;
			var _n3 = _n2.b;
			var node = _n3.a;
			var name = _n3.b;
			var decoder = _n3.c;
			return _Utils_eq(subKey, key) ? A2(_Browser_decodeEvent, decoder, event) : elm$core$Maybe$Nothing;
		};
		var messages = A2(elm$core$List$filterMap, toMessage, state.subs);
		return A2(
			elm$core$Task$andThen,
			function (_n1) {
				return elm$core$Task$succeed(state);
			},
			elm$core$Task$sequence(
				A2(
					elm$core$List$map,
					elm$core$Platform$sendToApp(router),
					messages)));
	});
var elm$browser$Browser$Events$subMap = F2(
	function (func, _n0) {
		var node = _n0.a;
		var name = _n0.b;
		var decoder = _n0.c;
		return A3(
			elm$browser$Browser$Events$MySub,
			node,
			name,
			A2(elm$json$Json$Decode$map, func, decoder));
	});
_Platform_effectManagers['Browser.Events'] = _Platform_createManager(elm$browser$Browser$Events$init, elm$browser$Browser$Events$onEffects, elm$browser$Browser$Events$onSelfMsg, 0, elm$browser$Browser$Events$subMap);
var elm$browser$Browser$Events$subscription = _Platform_leaf('Browser.Events');
var elm$browser$Browser$Events$on = F3(
	function (node, name, decoder) {
		return elm$browser$Browser$Events$subscription(
			A3(elm$browser$Browser$Events$MySub, node, name, decoder));
	});
var elm$browser$Browser$Events$onKeyDown = A2(elm$browser$Browser$Events$on, elm$browser$Browser$Events$Document, 'keydown');
var elm$core$Platform$Sub$batch = _Platform_batch;
var author$project$State$subscriptions = function (model) {
	return elm$core$Platform$Sub$batch(
		_List_fromArray(
			[
				elm$browser$Browser$Events$onKeyDown(
				A3(
					elm$json$Json$Decode$map2,
					author$project$Types$KeyInteraction(author$project$Types$Down),
					author$project$Rest$keyDecoder,
					author$project$Rest$shiftKeyDecoder))
			]));
};
var author$project$Box$addLabel = F2(
	function (boxId, _n0) {
		var box = _n0.a;
		return _Utils_eq(box.id, boxId) ? author$project$Types$Box(
			_Utils_update(
				box,
				{
					label: elm$core$Maybe$Just('div'),
					labelElements: author$project$LabelProcessor$processLabel('div')
				})) : author$project$Types$Box(box);
	});
var author$project$Box$boxSetLabel = F3(
	function (boxId, maybeLabel, document) {
		var label = function () {
			if (maybeLabel.$ === 'Just') {
				var justLabel = maybeLabel.a;
				return justLabel;
			} else {
				return '';
			}
		}();
		return A2(
			elm$core$List$map,
			function (_n0) {
				var box = _n0.a;
				return _Utils_eq(box.id, boxId) ? author$project$Types$Box(
					_Utils_update(
						box,
						{
							label: elm$core$Maybe$Just(label)
						})) : author$project$Types$Box(box);
			},
			document);
	});
var elm$core$List$filter = F2(
	function (isGood, list) {
		return A3(
			elm$core$List$foldr,
			F2(
				function (x, xs) {
					return isGood(x) ? A2(elm$core$List$cons, x, xs) : xs;
				}),
			_List_Nil,
			list);
	});
var author$project$Box$boxesByParentId = F2(
	function (parentId, model) {
		return A2(
			elm$core$List$filter,
			function (_n0) {
				var box = _n0.a;
				return _Utils_eq(box.parent, parentId) ? true : false;
			},
			model.document);
	});
var elm$json$Json$Encode$int = _Json_wrap;
var elm$json$Json$Encode$object = function (pairs) {
	return _Json_wrap(
		A3(
			elm$core$List$foldl,
			F2(
				function (_n0, obj) {
					var k = _n0.a;
					var v = _n0.b;
					return A3(_Json_addField, k, v, obj);
				}),
			_Json_emptyObject(_Utils_Tuple0),
			pairs));
};
var elm$json$Json$Encode$string = _Json_wrap;
var author$project$Box$boxToJson = function (_n0) {
	var box = _n0.a;
	var type_ = function () {
		var _n1 = box.type_;
		if (_n1.$ === 'SolidBox') {
			return 'solid_box';
		} else {
			return 'liquid_box';
		}
	}();
	return elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'id',
				elm$json$Json$Encode$int(box.id)),
				_Utils_Tuple2(
				'label',
				elm$json$Json$Encode$string(
					A2(elm$core$Maybe$withDefault, '', box.label))),
				_Utils_Tuple2(
				'content',
				elm$json$Json$Encode$string(
					A2(elm$core$Maybe$withDefault, '', box.content))),
				_Utils_Tuple2(
				'parent',
				elm$json$Json$Encode$int(box.parent)),
				_Utils_Tuple2(
				'type',
				elm$json$Json$Encode$string(type_))
			]));
};
var elm$json$Json$Encode$list = F2(
	function (func, entries) {
		return _Json_wrap(
			A3(
				elm$core$List$foldl,
				_Json_addEntry(func),
				_Json_emptyArray(_Utils_Tuple0),
				entries));
	});
var author$project$Box$documentToJsonString = function (model) {
	var boxesJsonStringifiedAndListified = A2(elm$json$Json$Encode$list, author$project$Box$boxToJson, model.document);
	return A2(elm$json$Json$Encode$encode, 0, boxesJsonStringifiedAndListified);
};
var author$project$Box$documentValidityIncrement = function (model) {
	return _Utils_update(
		model,
		{documentValidity: model.documentValidity + 1});
};
var author$project$Box$documentWithOneBox = _List_fromArray(
	[
		A5(
		author$project$Box$generateBox,
		1,
		elm$core$Maybe$Just('div'),
		elm$core$Maybe$Nothing,
		0,
		author$project$Types$SolidBox)
	]);
var author$project$Box$boxByIdStep = F2(
	function (boxBeingSearchedId, boxesToSearch) {
		boxByIdStep:
		while (true) {
			if (!boxesToSearch.b) {
				return elm$core$Maybe$Nothing;
			} else {
				var boxToSearch = boxesToSearch.a.a;
				var restOfBoxesToSearch = boxesToSearch.b;
				if (_Utils_eq(boxToSearch.id, boxBeingSearchedId)) {
					return elm$core$Maybe$Just(
						author$project$Types$Box(boxToSearch));
				} else {
					var $temp$boxBeingSearchedId = boxBeingSearchedId,
						$temp$boxesToSearch = restOfBoxesToSearch;
					boxBeingSearchedId = $temp$boxBeingSearchedId;
					boxesToSearch = $temp$boxesToSearch;
					continue boxByIdStep;
				}
			}
		}
	});
var author$project$Box$boxById = F2(
	function (boxBeingSearchedId, model) {
		return A2(author$project$Box$boxByIdStep, boxBeingSearchedId, model.document);
	});
var elm$core$List$maximum = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return elm$core$Maybe$Just(
			A3(elm$core$List$foldl, elm$core$Basics$max, x, xs));
	} else {
		return elm$core$Maybe$Nothing;
	}
};
var author$project$Box$highestBoxId = function (document) {
	var boxIds = A2(
		elm$core$List$map,
		function (_n0) {
			var box = _n0.a;
			return box.id;
		},
		document);
	return elm$core$List$maximum(boxIds);
};
var elm$core$List$drop = F2(
	function (n, list) {
		drop:
		while (true) {
			if (n <= 0) {
				return list;
			} else {
				if (!list.b) {
					return list;
				} else {
					var x = list.a;
					var xs = list.b;
					var $temp$n = n - 1,
						$temp$list = xs;
					n = $temp$n;
					list = $temp$list;
					continue drop;
				}
			}
		}
	});
var elm$core$List$takeReverse = F3(
	function (n, list, kept) {
		takeReverse:
		while (true) {
			if (n <= 0) {
				return kept;
			} else {
				if (!list.b) {
					return kept;
				} else {
					var x = list.a;
					var xs = list.b;
					var $temp$n = n - 1,
						$temp$list = xs,
						$temp$kept = A2(elm$core$List$cons, x, kept);
					n = $temp$n;
					list = $temp$list;
					kept = $temp$kept;
					continue takeReverse;
				}
			}
		}
	});
var elm$core$List$takeTailRec = F2(
	function (n, list) {
		return elm$core$List$reverse(
			A3(elm$core$List$takeReverse, n, list, _List_Nil));
	});
var elm$core$List$takeFast = F3(
	function (ctr, n, list) {
		if (n <= 0) {
			return _List_Nil;
		} else {
			var _n0 = _Utils_Tuple2(n, list);
			_n0$1:
			while (true) {
				_n0$5:
				while (true) {
					if (!_n0.b.b) {
						return list;
					} else {
						if (_n0.b.b.b) {
							switch (_n0.a) {
								case 1:
									break _n0$1;
								case 2:
									var _n2 = _n0.b;
									var x = _n2.a;
									var _n3 = _n2.b;
									var y = _n3.a;
									return _List_fromArray(
										[x, y]);
								case 3:
									if (_n0.b.b.b.b) {
										var _n4 = _n0.b;
										var x = _n4.a;
										var _n5 = _n4.b;
										var y = _n5.a;
										var _n6 = _n5.b;
										var z = _n6.a;
										return _List_fromArray(
											[x, y, z]);
									} else {
										break _n0$5;
									}
								default:
									if (_n0.b.b.b.b && _n0.b.b.b.b.b) {
										var _n7 = _n0.b;
										var x = _n7.a;
										var _n8 = _n7.b;
										var y = _n8.a;
										var _n9 = _n8.b;
										var z = _n9.a;
										var _n10 = _n9.b;
										var w = _n10.a;
										var tl = _n10.b;
										return (ctr > 1000) ? A2(
											elm$core$List$cons,
											x,
											A2(
												elm$core$List$cons,
												y,
												A2(
													elm$core$List$cons,
													z,
													A2(
														elm$core$List$cons,
														w,
														A2(elm$core$List$takeTailRec, n - 4, tl))))) : A2(
											elm$core$List$cons,
											x,
											A2(
												elm$core$List$cons,
												y,
												A2(
													elm$core$List$cons,
													z,
													A2(
														elm$core$List$cons,
														w,
														A3(elm$core$List$takeFast, ctr + 1, n - 4, tl)))));
									} else {
										break _n0$5;
									}
							}
						} else {
							if (_n0.a === 1) {
								break _n0$1;
							} else {
								break _n0$5;
							}
						}
					}
				}
				return list;
			}
			var _n1 = _n0.b;
			var x = _n1.a;
			return _List_fromArray(
				[x]);
		}
	});
var elm$core$List$take = F2(
	function (n, list) {
		return A3(elm$core$List$takeFast, 0, n, list);
	});
var author$project$Box$insertBoxByIndex = F4(
	function (index, newBoxParentId, type_, model) {
		var newBoxId = A2(
			elm$core$Maybe$withDefault,
			0,
			author$project$Box$highestBoxId(model.document)) + 1;
		var newBox = function () {
			if (type_.$ === 'SolidBox') {
				return A5(
					author$project$Box$generateBox,
					newBoxId,
					elm$core$Maybe$Just('div'),
					elm$core$Maybe$Nothing,
					newBoxParentId,
					type_);
			} else {
				return A5(
					author$project$Box$generateBox,
					newBoxId,
					elm$core$Maybe$Nothing,
					elm$core$Maybe$Just('Hello!'),
					newBoxParentId,
					type_);
			}
		}();
		var boxesRight = A2(elm$core$List$drop, index, model.document);
		var boxesLeft = A2(elm$core$List$take, index, model.document);
		return _Utils_update(
			model,
			{
				document: A2(
					elm$core$List$append,
					boxesLeft,
					A2(elm$core$List$cons, newBox, boxesRight))
			});
	});
var elm$core$Basics$negate = function (n) {
	return -n;
};
var elm$core$Debug$log = _Debug_log;
var elm$core$List$head = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return elm$core$Maybe$Just(x);
	} else {
		return elm$core$Maybe$Nothing;
	}
};
var elm$core$List$tail = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return elm$core$Maybe$Just(xs);
	} else {
		return elm$core$Maybe$Nothing;
	}
};
var author$project$Box$duplicateBoxStep = F3(
	function (oldBoxes, newBoxes, model) {
		duplicateBoxStep:
		while (true) {
			var restOfOldBoxes = A2(
				elm$core$Maybe$withDefault,
				_List_Nil,
				elm$core$List$tail(oldBoxes));
			var restOfNewBoxes = A2(
				elm$core$Maybe$withDefault,
				_List_Nil,
				elm$core$List$tail(newBoxes));
			var maybeFirstOldBox = elm$core$List$head(oldBoxes);
			var maybeFirstNewBox = elm$core$List$head(newBoxes);
			if (maybeFirstOldBox.$ === 'Nothing') {
				return model;
			} else {
				var firstOldBox = maybeFirstOldBox.a.a;
				if (maybeFirstNewBox.$ === 'Nothing') {
					return model;
				} else {
					var firstNewBox = maybeFirstNewBox.a.a;
					var lastBoxId = A2(
						elm$core$Maybe$withDefault,
						-1,
						author$project$Box$highestBoxId(model.document));
					var childrenOfFirstOldBox = A2(author$project$Box$boxesByParentId, firstOldBox.id, model);
					var addedFirstNewBox = function () {
						var _n6 = A2(author$project$Box$boxById, firstNewBox.id, model);
						if (_n6.$ === 'Just') {
							var fnb = _n6.a.a;
							return model;
						} else {
							return A4(author$project$Box$insertBoxByIndex, lastBoxId + 1, firstNewBox.parent, firstOldBox.type_, model);
						}
					}();
					var newFirstNewBox = function () {
						var _n5 = A2(author$project$Box$boxById, firstNewBox.id, model);
						if (_n5.$ === 'Just') {
							var fnb2 = _n5.a.a;
							return author$project$Types$Box(fnb2);
						} else {
							return A2(
								elm$core$Maybe$withDefault,
								author$project$Types$Box(firstNewBox),
								A2(author$project$Box$boxById, lastBoxId + 1, addedFirstNewBox));
						}
					}();
					var newFirstNewBoxId = function () {
						var b = newFirstNewBox.a;
						return b.id;
					}();
					var childrenOfFirstNewBox = A2(
						elm$core$List$map,
						function (_n3) {
							var child = _n3.a;
							return author$project$Types$Box(
								_Utils_update(
									child,
									{id: 0, parent: newFirstNewBoxId}));
						},
						childrenOfFirstOldBox);
					var updatedContentAndLabel = A2(
						elm$core$List$map,
						function (_n2) {
							var box = _n2.a;
							return (_Utils_eq(box.id, newFirstNewBoxId) && _Utils_eq(box.type_, author$project$Types$LiquidBox)) ? A2(
								elm$core$Debug$log,
								'updatedContentAndLabel',
								author$project$Types$Box(
									_Utils_update(
										box,
										{
											content: firstOldBox.content,
											label: firstOldBox.label,
											labelElements: author$project$LabelProcessor$processLabel(
												A2(elm$core$Maybe$withDefault, '', firstOldBox.label))
										}))) : ((_Utils_eq(box.id, newFirstNewBoxId) && _Utils_eq(box.type_, author$project$Types$SolidBox)) ? A2(
								elm$core$Debug$log,
								'updatedContentAndLabel',
								author$project$Types$Box(
									_Utils_update(
										box,
										{
											label: firstOldBox.label,
											labelElements: author$project$LabelProcessor$processLabel(
												A2(elm$core$Maybe$withDefault, '', firstOldBox.label))
										}))) : author$project$Types$Box(box));
						},
						addedFirstNewBox.document);
					var $temp$oldBoxes = _Utils_ap(restOfOldBoxes, childrenOfFirstOldBox),
						$temp$newBoxes = _Utils_ap(restOfNewBoxes, childrenOfFirstNewBox),
						$temp$model = _Utils_update(
						addedFirstNewBox,
						{document: updatedContentAndLabel});
					oldBoxes = $temp$oldBoxes;
					newBoxes = $temp$newBoxes;
					model = $temp$model;
					continue duplicateBoxStep;
				}
			}
		}
	});
var author$project$Box$duplicateBox = F3(
	function (newBoxId, oldBoxId, model) {
		var maybeNewBox = A2(author$project$Box$boxById, newBoxId, model);
		var maybeBoxToDuplicate = A2(
			author$project$Box$boxById,
			A2(elm$core$Maybe$withDefault, 0, model.duplicateSubjectId),
			model);
		if (maybeNewBox.$ === 'Nothing') {
			return model;
		} else {
			var newBox = maybeNewBox.a.a;
			if (maybeBoxToDuplicate.$ === 'Nothing') {
				return model;
			} else {
				var boxToDuplicate = maybeBoxToDuplicate.a.a;
				return A3(
					author$project$Box$duplicateBoxStep,
					_List_fromArray(
						[
							author$project$Types$Box(boxToDuplicate)
						]),
					_List_fromArray(
						[
							author$project$Types$Box(newBox)
						]),
					model);
			}
		}
	});
var author$project$Box$indexOfBoxByIdStep = F3(
	function (boxBeingSearchedId, boxesToSearch, step) {
		indexOfBoxByIdStep:
		while (true) {
			if (!boxesToSearch.b) {
				return elm$core$Maybe$Nothing;
			} else {
				var boxToSearch = boxesToSearch.a.a;
				var restOfBoxesToSearch = boxesToSearch.b;
				if (_Utils_eq(boxToSearch.id, boxBeingSearchedId)) {
					return elm$core$Maybe$Just(step);
				} else {
					var $temp$boxBeingSearchedId = boxBeingSearchedId,
						$temp$boxesToSearch = restOfBoxesToSearch,
						$temp$step = step + 1;
					boxBeingSearchedId = $temp$boxBeingSearchedId;
					boxesToSearch = $temp$boxesToSearch;
					step = $temp$step;
					continue indexOfBoxByIdStep;
				}
			}
		}
	});
var author$project$Box$indexOfBoxById = F2(
	function (boxBeingSearchedId, model) {
		return A3(author$project$Box$indexOfBoxByIdStep, boxBeingSearchedId, model.document, 0);
	});
var author$project$Box$insertBoxAfter = F3(
	function (boxId, type_, model) {
		var subject = A2(author$project$Box$boxById, boxId, model);
		var newBoxParentId = function () {
			if (subject.$ === 'Just') {
				var justInsertBeforeBox = subject.a.a;
				return justInsertBeforeBox.parent;
			} else {
				return 0;
			}
		}();
		var newBoxIndex = function () {
			var _n0 = A2(author$project$Box$indexOfBoxById, boxId, model);
			if (_n0.$ === 'Just') {
				var index = _n0.a;
				return index + 1;
			} else {
				return 0;
			}
		}();
		return A4(
			author$project$Box$insertBoxByIndex,
			newBoxIndex,
			newBoxParentId,
			type_,
			_Utils_update(
				model,
				{selectedBoxId: 0, status: author$project$Types$Default}));
	});
var author$project$Box$duplicateBoxAfter = F2(
	function (duplicateAfterId, model) {
		var boxToDuplicate = A2(
			author$project$Box$boxById,
			A2(elm$core$Maybe$withDefault, 1, model.duplicateSubjectId),
			model);
		var newModel = A3(
			author$project$Box$insertBoxAfter,
			duplicateAfterId,
			function () {
				if (boxToDuplicate.$ === 'Just') {
					var box = boxToDuplicate.a.a;
					return box.type_;
				} else {
					return author$project$Types$SolidBox;
				}
			}(),
			author$project$Box$documentValidityIncrement(model));
		var maybeNewBoxId = author$project$Box$highestBoxId(newModel.document);
		if (maybeNewBoxId.$ === 'Nothing') {
			return model;
		} else {
			var newBoxId = maybeNewBoxId.a;
			var _n1 = newModel.duplicateSubjectId;
			if (_n1.$ === 'Nothing') {
				return newModel;
			} else {
				var duplicateSubjectId = _n1.a;
				return A3(author$project$Box$duplicateBox, newBoxId, duplicateSubjectId, newModel);
			}
		}
	});
var author$project$Box$insertBoxBefore = F3(
	function (insertBeforeBoxId, type_, model) {
		var newBoxIndex = A2(
			elm$core$Maybe$withDefault,
			0,
			A2(author$project$Box$indexOfBoxById, insertBeforeBoxId, model));
		var insertBeforeBox = A2(author$project$Box$boxById, insertBeforeBoxId, model);
		var newBoxParentId = function () {
			if (insertBeforeBox.$ === 'Just') {
				var justInsertBeforeBox = insertBeforeBox.a.a;
				return justInsertBeforeBox.parent;
			} else {
				return 0;
			}
		}();
		return A4(
			author$project$Box$insertBoxByIndex,
			newBoxIndex,
			newBoxParentId,
			type_,
			_Utils_update(
				model,
				{selectedBoxId: 0, status: author$project$Types$Default}));
	});
var author$project$Box$duplicateBoxBefore = F2(
	function (duplicateBeforeId, model) {
		var boxToDuplicate = A2(
			author$project$Box$boxById,
			A2(elm$core$Maybe$withDefault, 1, model.duplicateSubjectId),
			model);
		var newModel = A3(
			author$project$Box$insertBoxBefore,
			duplicateBeforeId,
			function () {
				if (boxToDuplicate.$ === 'Just') {
					var box = boxToDuplicate.a.a;
					return box.type_;
				} else {
					return author$project$Types$SolidBox;
				}
			}(),
			author$project$Box$documentValidityIncrement(model));
		var maybeNewBoxId = author$project$Box$highestBoxId(newModel.document);
		if (maybeNewBoxId.$ === 'Nothing') {
			return model;
		} else {
			var newBoxId = maybeNewBoxId.a;
			var _n1 = newModel.duplicateSubjectId;
			if (_n1.$ === 'Nothing') {
				return newModel;
			} else {
				var duplicateSubjectId = _n1.a;
				return A3(author$project$Box$duplicateBox, newBoxId, duplicateSubjectId, newModel);
			}
		}
	});
var author$project$Box$insertBoxInsideFirst = F3(
	function (boxId, type_, model) {
		var subject = A2(author$project$Box$boxById, boxId, model);
		var newBoxParentId = function () {
			if (subject.$ === 'Just') {
				var justInsertBeforeBox = subject.a.a;
				return justInsertBeforeBox.id;
			} else {
				return 0;
			}
		}();
		var newBoxIndex = function () {
			var _n0 = A2(author$project$Box$indexOfBoxById, boxId, model);
			if (_n0.$ === 'Just') {
				var index = _n0.a;
				return index + 1;
			} else {
				return 0;
			}
		}();
		return A4(
			author$project$Box$insertBoxByIndex,
			newBoxIndex,
			newBoxParentId,
			type_,
			_Utils_update(
				model,
				{selectedBoxId: 0, status: author$project$Types$Default}));
	});
var author$project$Box$duplicateBoxInsideFirst = F2(
	function (duplicateInsideFirstId, model) {
		var boxToDuplicate = A2(
			author$project$Box$boxById,
			A2(elm$core$Maybe$withDefault, 1, model.duplicateSubjectId),
			model);
		var newModel = A3(
			author$project$Box$insertBoxInsideFirst,
			duplicateInsideFirstId,
			function () {
				if (boxToDuplicate.$ === 'Just') {
					var box = boxToDuplicate.a.a;
					return box.type_;
				} else {
					return author$project$Types$SolidBox;
				}
			}(),
			author$project$Box$documentValidityIncrement(model));
		var maybeNewBoxId = author$project$Box$highestBoxId(newModel.document);
		if (maybeNewBoxId.$ === 'Nothing') {
			return model;
		} else {
			var newBoxId = maybeNewBoxId.a;
			var _n1 = newModel.duplicateSubjectId;
			if (_n1.$ === 'Nothing') {
				return newModel;
			} else {
				var duplicateSubjectId = _n1.a;
				return A3(author$project$Box$duplicateBox, newBoxId, duplicateSubjectId, newModel);
			}
		}
	});
var author$project$Box$insertBoxInsideLast = F3(
	function (boxId, type_, model) {
		var subject = A2(author$project$Box$boxById, boxId, model);
		var newBoxParentId = function () {
			if (subject.$ === 'Just') {
				var justInsertBeforeBox = subject.a.a;
				return justInsertBeforeBox.id;
			} else {
				return 0;
			}
		}();
		var childrenOfSubject = A2(author$project$Box$boxesByParentId, boxId, model);
		var lastChildrenOfSubject = elm$core$List$head(
			A2(
				elm$core$List$drop,
				elm$core$List$length(childrenOfSubject) - 1,
				childrenOfSubject));
		var newBoxIndex = function () {
			if (lastChildrenOfSubject.$ === 'Just') {
				var lastChild = lastChildrenOfSubject.a.a;
				var _n1 = A2(author$project$Box$indexOfBoxById, lastChild.id, model);
				if (_n1.$ === 'Just') {
					var index = _n1.a;
					return index + 1;
				} else {
					return 0;
				}
			} else {
				return 0;
			}
		}();
		return A4(
			author$project$Box$insertBoxByIndex,
			newBoxIndex,
			newBoxParentId,
			type_,
			_Utils_update(
				model,
				{selectedBoxId: 0, status: author$project$Types$Default}));
	});
var author$project$Box$duplicateBoxInsideLast = F2(
	function (duplicateInsideLastId, model) {
		var boxToDuplicate = A2(
			author$project$Box$boxById,
			A2(elm$core$Maybe$withDefault, 1, model.duplicateSubjectId),
			model);
		var newModel = A3(
			author$project$Box$insertBoxInsideLast,
			duplicateInsideLastId,
			function () {
				if (boxToDuplicate.$ === 'Just') {
					var box = boxToDuplicate.a.a;
					return box.type_;
				} else {
					return author$project$Types$SolidBox;
				}
			}(),
			author$project$Box$documentValidityIncrement(model));
		var maybeNewBoxId = author$project$Box$highestBoxId(newModel.document);
		if (maybeNewBoxId.$ === 'Nothing') {
			return model;
		} else {
			var newBoxId = maybeNewBoxId.a;
			var _n1 = newModel.duplicateSubjectId;
			if (_n1.$ === 'Nothing') {
				return newModel;
			} else {
				var duplicateSubjectId = _n1.a;
				return A3(author$project$Box$duplicateBox, newBoxId, duplicateSubjectId, newModel);
			}
		}
	});
var author$project$Box$isDocumentEmpty = function (model) {
	return (!elm$core$List$length(model.document)) ? true : false;
};
var author$project$Box$removeBoxStep = F2(
	function (boxIds, model) {
		removeBoxStep:
		while (true) {
			var children = function () {
				var _n2 = elm$core$List$head(boxIds);
				if (_n2.$ === 'Nothing') {
					return _List_Nil;
				} else {
					var boxId = _n2.a;
					return A2(
						elm$core$List$map,
						function (_n3) {
							var b = _n3.a;
							return b.id;
						},
						A2(author$project$Box$boxesByParentId, boxId, model));
				}
			}();
			var newBoxIds = A2(
				elm$core$List$append,
				A2(
					elm$core$Maybe$withDefault,
					_List_Nil,
					elm$core$List$tail(boxIds)),
				children);
			var boxes = function () {
				var _n0 = elm$core$List$head(boxIds);
				if (_n0.$ === 'Nothing') {
					return model.document;
				} else {
					var boxId = _n0.a;
					return A2(
						elm$core$List$filter,
						function (_n1) {
							var box = _n1.a;
							return (_Utils_eq(box.id, boxId) || _Utils_eq(box.parent, boxId)) ? false : true;
						},
						model.document);
				}
			}();
			var newModel = _Utils_update(
				model,
				{document: boxes});
			if (!elm$core$List$length(newBoxIds)) {
				return boxes;
			} else {
				var $temp$boxIds = newBoxIds,
					$temp$model = newModel;
				boxIds = $temp$boxIds;
				model = $temp$model;
				continue removeBoxStep;
			}
		}
	});
var author$project$Box$removeBox = F2(
	function (boxId, model) {
		return A2(
			author$project$Box$removeBoxStep,
			_List_fromArray(
				[boxId]),
			model);
	});
var author$project$Box$removeLabel = F2(
	function (boxId, _n0) {
		var box = _n0.a;
		return _Utils_eq(box.id, boxId) ? author$project$Types$Box(
			_Utils_update(
				box,
				{label: elm$core$Maybe$Nothing, labelElements: _List_Nil})) : author$project$Types$Box(box);
	});
var author$project$Box$updateBoxContent = F3(
	function (boxId, content, _n0) {
		var box = _n0.a;
		return _Utils_eq(box.id, boxId) ? author$project$Types$Box(
			_Utils_update(
				box,
				{
					content: elm$core$Maybe$Just(content)
				})) : author$project$Types$Box(box);
	});
var elm$core$Basics$neq = _Utils_notEqual;
var author$project$Box$updateBoxLabel = F3(
	function (boxId, label, _n0) {
		var box = _n0.a;
		var trimmedLabel = elm$core$String$trim(label);
		return _Utils_eq(box.id, boxId) ? (elm$core$String$length(trimmedLabel) ? author$project$Types$Box(
			_Utils_update(
				box,
				{
					label: elm$core$Maybe$Just(label),
					labelElements: author$project$LabelProcessor$processLabel(label)
				})) : author$project$Types$Box(
			_Utils_update(
				box,
				{
					label: elm$core$Maybe$Nothing,
					labelElements: author$project$LabelProcessor$processLabel(label)
				}))) : author$project$Types$Box(box);
	});
var elm$core$List$intersperse = F2(
	function (sep, xs) {
		if (!xs.b) {
			return _List_Nil;
		} else {
			var hd = xs.a;
			var tl = xs.b;
			var step = F2(
				function (x, rest) {
					return A2(
						elm$core$List$cons,
						sep,
						A2(elm$core$List$cons, x, rest));
				});
			var spersed = A3(elm$core$List$foldr, step, _List_Nil, tl);
			return A2(elm$core$List$cons, hd, spersed);
		}
	});
var elm$core$List$repeatHelp = F3(
	function (result, n, value) {
		repeatHelp:
		while (true) {
			if (n <= 0) {
				return result;
			} else {
				var $temp$result = A2(elm$core$List$cons, value, result),
					$temp$n = n - 1,
					$temp$value = value;
				result = $temp$result;
				n = $temp$n;
				value = $temp$value;
				continue repeatHelp;
			}
		}
	});
var elm$core$List$repeat = F2(
	function (n, value) {
		return A3(elm$core$List$repeatHelp, _List_Nil, n, value);
	});
var author$project$Odl$boxContentToOdl = F3(
	function (_n2, model, level) {
		var box = _n2.a;
		var children = A2(author$project$Box$boxesByParentId, box.id, model);
		var boxesToOdlStrings = A2(
			elm$core$List$map,
			A2(author$project$Odl$boxToOdl, model, level),
			children);
		return A3(
			elm$core$List$foldr,
			elm$core$Basics$append,
			'',
			A2(elm$core$List$intersperse, '\n\n', boxesToOdlStrings));
	});
var author$project$Odl$boxToOdl = F3(
	function (model, level, _n0) {
		var box = _n0.a;
		var label = function () {
			var _n1 = box.label;
			if (_n1.$ === 'Just') {
				var justLabel = _n1.a;
				return '[ ' + (justLabel + ' ] ');
			} else {
				return '';
			}
		}();
		var indentation = A3(
			elm$core$List$foldr,
			elm$core$Basics$append,
			'',
			A2(elm$core$List$repeat, level, '    '));
		var opening_tag = _Utils_eq(box.type_, author$project$Types$SolidBox) ? (indentation + '<! ') : (indentation + '[! ');
		var content = function () {
			if (_Utils_eq(box.type_, author$project$Types$SolidBox)) {
				var odlString = A3(
					author$project$Odl$boxContentToOdl,
					author$project$Types$Box(box),
					model,
					level + 1);
				return (!elm$core$String$length(
					elm$core$String$trim(odlString))) ? '' : ('\n' + (odlString + '\n'));
			} else {
				return A2(elm$core$Maybe$withDefault, '', box.content);
			}
		}();
		var closing_tag = _Utils_eq(box.type_, author$project$Types$SolidBox) ? (indentation + ' !>') : ' !]';
		return _Utils_ap(
			opening_tag,
			_Utils_ap(
				label,
				_Utils_ap(content, closing_tag)));
	});
var author$project$Odl$currentBoxId = function (odlParserModel) {
	var maybeHead = elm$core$List$head(
		elm$core$List$reverse(odlParserModel.currentBoxes));
	if (maybeHead.$ === 'Just') {
		var head = maybeHead.a;
		return elm$core$Maybe$Just(head.boxId);
	} else {
		return elm$core$Maybe$Nothing;
	}
};
var author$project$Odl$currentBoxIdAtLowerLevel = function (odlParserModel) {
	var filteredBoxes = A2(
		elm$core$List$filter,
		function (currentBox) {
			return _Utils_eq(currentBox.level, odlParserModel.level - 1) ? true : false;
		},
		odlParserModel.currentBoxes);
	var maybeHead = elm$core$List$head(filteredBoxes);
	if (maybeHead.$ === 'Just') {
		var head = maybeHead.a;
		return elm$core$Maybe$Just(head.boxId);
	} else {
		return elm$core$Maybe$Nothing;
	}
};
var author$project$Odl$removeLastCurrentBox = function (odlParserModel) {
	return elm$core$List$reverse(
		A2(
			elm$core$Maybe$withDefault,
			_List_Nil,
			elm$core$List$tail(
				elm$core$List$reverse(odlParserModel.currentBoxes))));
};
var author$project$Types$ProcessingLabelOfLiquidBox = {$: 'ProcessingLabelOfLiquidBox'};
var author$project$Types$ProcessingLabelOfSolidBox = {$: 'ProcessingLabelOfSolidBox'};
var author$project$Types$ProcessingLiquidBox = {$: 'ProcessingLiquidBox'};
var author$project$Types$ProcessingSolidBox = {$: 'ProcessingSolidBox'};
var author$project$Types$Unresolved = {$: 'Unresolved'};
var elm$core$String$dropRight = F2(
	function (n, string) {
		return (n < 1) ? string : A3(elm$core$String$slice, 0, -n, string);
	});
var elm$core$String$right = F2(
	function (n, string) {
		return (n < 1) ? '' : A3(
			elm$core$String$slice,
			-n,
			elm$core$String$length(string),
			string);
	});
var elm$core$String$trimLeft = _String_trimLeft;
var author$project$Odl$odlToBoxes = F2(
	function (odl, odlParserModel) {
		odlToBoxes:
		while (true) {
			if (!elm$core$String$length(odl)) {
				return A2(
					elm$core$List$map,
					function (_n0) {
						var box = _n0.a;
						var labelElements = function () {
							var _n2 = box.label;
							if (_n2.$ === 'Just') {
								var label = _n2.a;
								return author$project$LabelProcessor$processLabel(label);
							} else {
								return _List_Nil;
							}
						}();
						var content = function () {
							if (_Utils_eq(box.type_, author$project$Types$LiquidBox)) {
								var _n1 = box.content;
								if (_n1.$ === 'Just') {
									var justContent = _n1.a;
									return (elm$core$String$length(justContent) > 0) ? elm$core$Maybe$Just(
										A2(elm$core$String$dropLeft, 1, justContent)) : box.content;
								} else {
									return box.content;
								}
							} else {
								return box.content;
							}
						}();
						return author$project$Types$Box(
							_Utils_update(
								box,
								{content: content, labelElements: labelElements}));
					},
					odlParserModel.boxes);
			} else {
				var newOdl = A2(elm$core$String$dropLeft, 1, odl);
				var newBasket = _Utils_ap(
					odlParserModel.basket,
					A2(elm$core$String$left, 1, odl));
				var newModel = _Utils_update(
					odlParserModel,
					{basket: newBasket});
				var _n3 = odlParserModel.status;
				switch (_n3.$) {
					case 'Unresolved':
						var newModel2 = function () {
							if (elm$core$String$trimLeft(newBasket) === '[!') {
								var id = A2(
									elm$core$Maybe$withDefault,
									0,
									author$project$Box$highestBoxId(odlParserModel.boxes)) + 1;
								var newBox = A5(
									author$project$Box$generateBox,
									id,
									elm$core$Maybe$Nothing,
									elm$core$Maybe$Nothing,
									A2(
										elm$core$Maybe$withDefault,
										0,
										author$project$Odl$currentBoxIdAtLowerLevel(newModel)),
									author$project$Types$LiquidBox);
								var newBoxes = _Utils_ap(
									odlParserModel.boxes,
									_List_fromArray(
										[newBox]));
								return _Utils_update(
									newModel,
									{
										basket: '',
										boxes: newBoxes,
										currentBoxes: _Utils_ap(
											newModel.currentBoxes,
											_List_fromArray(
												[
													{boxId: id, level: newModel.level}
												])),
										status: author$project$Types$ProcessingLiquidBox
									});
							} else {
								if (elm$core$String$trimLeft(newBasket) === '<!') {
									var id = A2(
										elm$core$Maybe$withDefault,
										0,
										author$project$Box$highestBoxId(odlParserModel.boxes)) + 1;
									var newBox = A5(
										author$project$Box$generateBox,
										id,
										elm$core$Maybe$Nothing,
										elm$core$Maybe$Nothing,
										A2(
											elm$core$Maybe$withDefault,
											0,
											author$project$Odl$currentBoxIdAtLowerLevel(newModel)),
										author$project$Types$SolidBox);
									var newBoxes = _Utils_ap(
										odlParserModel.boxes,
										_List_fromArray(
											[newBox]));
									return _Utils_update(
										newModel,
										{
											basket: '',
											boxes: newBoxes,
											currentBoxes: _Utils_ap(
												newModel.currentBoxes,
												_List_fromArray(
													[
														{boxId: id, level: newModel.level}
													])),
											level: newModel.level + 1,
											parent: A2(
												elm$core$Maybe$withDefault,
												0,
												author$project$Odl$currentBoxIdAtLowerLevel(newModel)),
											status: author$project$Types$ProcessingSolidBox
										});
								} else {
									if (elm$core$String$trimLeft(newBasket) === '!>') {
										return _Utils_update(
											newModel,
											{
												basket: '',
												currentBoxes: author$project$Odl$removeLastCurrentBox(newModel),
												level: newModel.level - 1,
												status: author$project$Types$Unresolved
											});
									} else {
										if ((A2(elm$core$String$right, 1, newBasket) !== '<') && ((A2(elm$core$String$right, 1, newBasket) !== '[') && ((A2(elm$core$String$right, 1, newBasket) !== '!') && (A2(elm$core$String$right, 1, newBasket) !== '>')))) {
											return _Utils_update(
												newModel,
												{basket: ''});
										} else {
											return newModel;
										}
									}
								}
							}
						}();
						var $temp$odl = newOdl,
							$temp$odlParserModel = newModel2;
						odl = $temp$odl;
						odlParserModel = $temp$odlParserModel;
						continue odlToBoxes;
					case 'ProcessingLiquidBox':
						var newModel2 = (newBasket === ' [ ') ? _Utils_update(
							newModel,
							{basket: '', status: author$project$Types$ProcessingLabelOfLiquidBox}) : ((A2(elm$core$String$right, 3, newBasket) === ' !]') ? _Utils_update(
							newModel,
							{
								basket: '',
								boxes: A2(
									elm$core$List$map,
									A2(
										author$project$Box$updateBoxContent,
										A2(
											elm$core$Maybe$withDefault,
											0,
											author$project$Odl$currentBoxId(newModel)),
										A2(elm$core$String$dropRight, 3, newModel.basket)),
									newModel.boxes),
								currentBoxes: author$project$Odl$removeLastCurrentBox(newModel),
								status: author$project$Types$Unresolved
							}) : _Utils_update(
							newModel,
							{
								boxes: A2(
									elm$core$List$map,
									A2(
										author$project$Box$updateBoxContent,
										A2(
											elm$core$Maybe$withDefault,
											0,
											author$project$Odl$currentBoxId(newModel)),
										newModel.basket),
									newModel.boxes)
							}));
						var $temp$odl = newOdl,
							$temp$odlParserModel = newModel2;
						odl = $temp$odl;
						odlParserModel = $temp$odlParserModel;
						continue odlToBoxes;
					case 'ProcessingSolidBox':
						var newOdl2 = (A2(elm$core$String$left, 3, odl) === ' [ ') ? A2(elm$core$String$dropLeft, 3, odl) : newOdl;
						var newModel2 = (A2(elm$core$String$left, 3, odl) === ' [ ') ? _Utils_update(
							newModel,
							{basket: '', status: author$project$Types$ProcessingLabelOfSolidBox}) : _Utils_update(
							newModel,
							{status: author$project$Types$Unresolved});
						var $temp$odl = newOdl2,
							$temp$odlParserModel = newModel2;
						odl = $temp$odl;
						odlParserModel = $temp$odlParserModel;
						continue odlToBoxes;
					case 'ProcessingLabelOfLiquidBox':
						if (A2(elm$core$String$right, 2, newBasket) === ' ]') {
							var $temp$odl = newOdl,
								$temp$odlParserModel = _Utils_update(
								newModel,
								{basket: '', status: author$project$Types$ProcessingLiquidBox});
							odl = $temp$odl;
							odlParserModel = $temp$odlParserModel;
							continue odlToBoxes;
						} else {
							var newBoxes = A3(
								author$project$Box$boxSetLabel,
								A2(
									elm$core$Maybe$withDefault,
									0,
									author$project$Odl$currentBoxId(newModel)),
								elm$core$Maybe$Just(
									elm$core$String$trim(newModel.basket)),
								newModel.boxes);
							var newModel2 = _Utils_update(
								newModel,
								{boxes: newBoxes});
							var $temp$odl = newOdl,
								$temp$odlParserModel = newModel2;
							odl = $temp$odl;
							odlParserModel = $temp$odlParserModel;
							continue odlToBoxes;
						}
					default:
						if (A2(elm$core$String$right, 2, newBasket) === ' ]') {
							var newOdl2 = (!elm$core$String$length(
								elm$core$String$trim(
									A2(elm$core$String$left, 1, newOdl)))) ? A2(elm$core$String$dropLeft, 1, newOdl) : newOdl;
							var $temp$odl = newOdl2,
								$temp$odlParserModel = _Utils_update(
								newModel,
								{basket: '', status: author$project$Types$Unresolved});
							odl = $temp$odl;
							odlParserModel = $temp$odlParserModel;
							continue odlToBoxes;
						} else {
							var newBoxes = A3(
								author$project$Box$boxSetLabel,
								A2(
									elm$core$Maybe$withDefault,
									0,
									author$project$Odl$currentBoxId(newModel)),
								elm$core$Maybe$Just(
									elm$core$String$trim(newModel.basket)),
								newModel.boxes);
							var newModel2 = _Utils_update(
								newModel,
								{boxes: newBoxes});
							var $temp$odl = newOdl,
								$temp$odlParserModel = newModel2;
							odl = $temp$odl;
							odlParserModel = $temp$odlParserModel;
							continue odlToBoxes;
						}
				}
			}
		}
	});
var elm$json$Json$Encode$null = _Json_encodeNull;
var author$project$State$expandElements = _Platform_outgoingPort(
	'expandElements',
	function ($) {
		return elm$json$Json$Encode$null;
	});
var author$project$Types$AddLabelChooseBox = {$: 'AddLabelChooseBox'};
var author$project$Types$DuplicateBoxAfterChooseBox = {$: 'DuplicateBoxAfterChooseBox'};
var author$project$Types$DuplicateBoxBeforeChooseBox = {$: 'DuplicateBoxBeforeChooseBox'};
var author$project$Types$DuplicateBoxChooseBox = {$: 'DuplicateBoxChooseBox'};
var author$project$Types$DuplicateBoxInsideFirstChooseBox = {$: 'DuplicateBoxInsideFirstChooseBox'};
var author$project$Types$DuplicateBoxInsideLastChooseBox = {$: 'DuplicateBoxInsideLastChooseBox'};
var author$project$Types$DuplicateBoxShowOptions = {$: 'DuplicateBoxShowOptions'};
var author$project$Types$EditBox = {$: 'EditBox'};
var author$project$Types$EditBoxChooseBox = {$: 'EditBoxChooseBox'};
var author$project$Types$LiquidBoxAdditionAfterChooseBox = {$: 'LiquidBoxAdditionAfterChooseBox'};
var author$project$Types$LiquidBoxAdditionBeforeChooseBox = {$: 'LiquidBoxAdditionBeforeChooseBox'};
var author$project$Types$LiquidBoxAdditionInsideFirstChooseBox = {$: 'LiquidBoxAdditionInsideFirstChooseBox'};
var author$project$Types$LiquidBoxAdditionInsideLastChooseBox = {$: 'LiquidBoxAdditionInsideLastChooseBox'};
var author$project$Types$LiquidBoxAdditionShowOptions = {$: 'LiquidBoxAdditionShowOptions'};
var author$project$Types$MoveBoxChooseBox = {$: 'MoveBoxChooseBox'};
var author$project$Types$RemoveBoxChooseBox = {$: 'RemoveBoxChooseBox'};
var author$project$Types$RemoveLabelChooseBox = {$: 'RemoveLabelChooseBox'};
var author$project$Types$SolidBoxAdditionAfterChooseBox = {$: 'SolidBoxAdditionAfterChooseBox'};
var author$project$Types$SolidBoxAdditionBeforeChooseBox = {$: 'SolidBoxAdditionBeforeChooseBox'};
var author$project$Types$SolidBoxAdditionInsideFirstChooseBox = {$: 'SolidBoxAdditionInsideFirstChooseBox'};
var author$project$Types$SolidBoxAdditionInsideLastChooseBox = {$: 'SolidBoxAdditionInsideLastChooseBox'};
var author$project$Types$SolidBoxAdditionShowOptions = {$: 'SolidBoxAdditionShowOptions'};
var author$project$Types$ViewOdl = {$: 'ViewOdl'};
var author$project$State$update = F2(
	function (msg, model) {
		switch (msg.$) {
			case 'DuplicateBoxSelectBox':
				var duplicateSubjectId = msg.a;
				var newModel = _Utils_update(
					model,
					{
						duplicateSubjectId: elm$core$Maybe$Just(duplicateSubjectId),
						selectedBoxId: 0,
						status: author$project$Types$DuplicateBoxShowOptions
					});
				return _Utils_Tuple2(newModel, elm$core$Platform$Cmd$none);
			case 'DuplicateBoxBefore':
				var duplicateBeforeId = msg.a;
				var newModel = A2(
					author$project$Box$duplicateBoxBefore,
					duplicateBeforeId,
					_Utils_update(
						model,
						{selectedBoxId: 0, status: author$project$Types$Default}));
				return _Utils_Tuple2(newModel, elm$core$Platform$Cmd$none);
			case 'DuplicateBoxInsideFirst':
				var duplicateInsideFirstId = msg.a;
				var newModel = A2(
					author$project$Box$duplicateBoxInsideFirst,
					duplicateInsideFirstId,
					_Utils_update(
						model,
						{selectedBoxId: 0, status: author$project$Types$Default}));
				return _Utils_Tuple2(newModel, elm$core$Platform$Cmd$none);
			case 'DuplicateBoxInsideLast':
				var duplicateInsideLastId = msg.a;
				var newModel = A2(
					author$project$Box$duplicateBoxInsideLast,
					duplicateInsideLastId,
					_Utils_update(
						model,
						{selectedBoxId: 0, status: author$project$Types$Default}));
				return _Utils_Tuple2(newModel, elm$core$Platform$Cmd$none);
			case 'DuplicateBoxAfter':
				var duplicateAfterId = msg.a;
				var newModel = A2(
					author$project$Box$duplicateBoxAfter,
					duplicateAfterId,
					_Utils_update(
						model,
						{selectedBoxId: 0, status: author$project$Types$Default}));
				return _Utils_Tuple2(newModel, elm$core$Platform$Cmd$none);
			case 'MoveBoxSelectBox':
				var moveBoxId = msg.a;
				var newModel = _Utils_update(
					model,
					{selectedBoxId: 0, status: author$project$Types$Default});
				return _Utils_Tuple2(newModel, elm$core$Platform$Cmd$none);
			case 'EditBoxSelectBox':
				var moveBoxId = msg.a;
				var newModel = _Utils_update(
					model,
					{status: author$project$Types$EditBox});
				return _Utils_Tuple2(newModel, elm$core$Platform$Cmd$none);
			case 'Expand':
				var newModel = author$project$Box$documentValidityIncrement(model);
				return _Utils_Tuple2(
					newModel,
					author$project$State$expandElements(_Utils_Tuple0));
			case 'AdjustHeight':
				var height = msg.a;
				var newModel = _Utils_update(
					model,
					{
						importString: elm$core$String$fromInt(height)
					});
				return _Utils_Tuple2(newModel, elm$core$Platform$Cmd$none);
			case 'AddBoxInside':
				var box = msg.a;
				var targetId = msg.b;
				return _Utils_Tuple2(model, elm$core$Platform$Cmd$none);
			case 'SetLabel':
				var boxId = msg.a;
				var newLabel = msg.b;
				var newModel = _Utils_update(
					model,
					{
						document: A3(author$project$Box$boxSetLabel, boxId, newLabel, model.document)
					});
				return _Utils_Tuple2(newModel, elm$core$Platform$Cmd$none);
			case 'KeyInteraction':
				var keyInteractionType = msg.a;
				var key = msg.b;
				var shiftPressed = msg.c;
				var newModel = ((key === 'S') && (shiftPressed && _Utils_eq(model.status, author$project$Types$Default))) ? _Utils_update(
					model,
					{status: author$project$Types$SolidBoxAdditionShowOptions}) : (((key === 'a') && _Utils_eq(model.status, author$project$Types$SolidBoxAdditionShowOptions)) ? _Utils_update(
					model,
					{status: author$project$Types$SolidBoxAdditionBeforeChooseBox}) : ((key === 'Escape') ? _Utils_update(
					model,
					{_export: '', import_: false, selectedBoxId: 0, status: author$project$Types$Default}) : model));
				return _Utils_Tuple2(newModel, elm$core$Platform$Cmd$none);
			case 'SolidBoxAdditionBefore':
				var addBeforeBoxId = msg.a;
				var newModel = A3(author$project$Box$insertBoxBefore, addBeforeBoxId, author$project$Types$SolidBox, model);
				return _Utils_Tuple2(
					newModel,
					author$project$State$expandElements(_Utils_Tuple0));
			case 'LiquidBoxAdditionBefore':
				var addBeforeLiquidBoxId = msg.a;
				var newModel = A3(author$project$Box$insertBoxBefore, addBeforeLiquidBoxId, author$project$Types$LiquidBox, model);
				return _Utils_Tuple2(
					newModel,
					author$project$State$expandElements(_Utils_Tuple0));
			case 'SolidBoxAdditionAfter':
				var addAfterBoxId = msg.a;
				var newModel = A3(author$project$Box$insertBoxAfter, addAfterBoxId, author$project$Types$SolidBox, model);
				return _Utils_Tuple2(
					newModel,
					author$project$State$expandElements(_Utils_Tuple0));
			case 'LiquidBoxAdditionAfter':
				var addAfterLiquidBoxId = msg.a;
				var newModel = A3(author$project$Box$insertBoxAfter, addAfterLiquidBoxId, author$project$Types$LiquidBox, model);
				return _Utils_Tuple2(
					newModel,
					author$project$State$expandElements(_Utils_Tuple0));
			case 'SolidBoxAdditionInsideFirst':
				var addInsideFirstBoxId = msg.a;
				var newModel = A3(author$project$Box$insertBoxInsideFirst, addInsideFirstBoxId, author$project$Types$SolidBox, model);
				return _Utils_Tuple2(
					newModel,
					author$project$State$expandElements(_Utils_Tuple0));
			case 'LiquidBoxAdditionInsideFirst':
				var addInsideFirstLiquidBoxId = msg.a;
				var newModel = A3(author$project$Box$insertBoxInsideFirst, addInsideFirstLiquidBoxId, author$project$Types$LiquidBox, model);
				return _Utils_Tuple2(
					newModel,
					author$project$State$expandElements(_Utils_Tuple0));
			case 'SolidBoxAdditionInsideLast':
				var addInsideLastBoxId = msg.a;
				var newModel = A3(author$project$Box$insertBoxInsideLast, addInsideLastBoxId, author$project$Types$SolidBox, model);
				return _Utils_Tuple2(
					newModel,
					author$project$State$expandElements(_Utils_Tuple0));
			case 'LiquidBoxAdditionInsideLast':
				var addInsideLastLiquidBoxId = msg.a;
				var newModel = A3(author$project$Box$insertBoxInsideLast, addInsideLastLiquidBoxId, author$project$Types$LiquidBox, model);
				return _Utils_Tuple2(
					newModel,
					author$project$State$expandElements(_Utils_Tuple0));
			case 'SelectBox':
				var boxToBeSelectedId = msg.a;
				var newModel = _Utils_update(
					model,
					{selectedBoxId: boxToBeSelectedId});
				return _Utils_Tuple2(newModel, elm$core$Platform$Cmd$none);
			case 'LabelUpdate':
				var boxId = msg.a;
				var label = msg.b;
				var newModel = _Utils_update(
					model,
					{
						document: A2(
							elm$core$List$map,
							A2(author$project$Box$updateBoxLabel, boxId, label),
							model.document)
					});
				return _Utils_Tuple2(newModel, elm$core$Platform$Cmd$none);
			case 'LiquidBoxUpdate':
				var boxId = msg.a;
				var content = msg.b;
				var newModel = _Utils_update(
					model,
					{
						document: A2(
							elm$core$List$map,
							A2(author$project$Box$updateBoxContent, boxId, content),
							model.document)
					});
				return _Utils_Tuple2(newModel, elm$core$Platform$Cmd$none);
			case 'RemoveLabel':
				var boxId = msg.a;
				var newModel = author$project$Box$documentValidityIncrement(
					_Utils_update(
						model,
						{
							document: A2(
								elm$core$List$map,
								author$project$Box$removeLabel(boxId),
								model.document),
							selectedBoxId: 0,
							status: author$project$Types$Default
						}));
				return _Utils_Tuple2(
					newModel,
					author$project$State$expandElements(_Utils_Tuple0));
			case 'AddLabel':
				var boxId = msg.a;
				var newModel = author$project$Box$documentValidityIncrement(
					_Utils_update(
						model,
						{
							document: A2(
								elm$core$List$map,
								author$project$Box$addLabel(boxId),
								model.document),
							selectedBoxId: 0,
							status: author$project$Types$Default
						}));
				return _Utils_Tuple2(
					newModel,
					author$project$State$expandElements(_Utils_Tuple0));
			case 'RemoveBox':
				var boxId = msg.a;
				var newModel = _Utils_update(
					model,
					{
						document: A2(author$project$Box$removeBox, boxId, model),
						selectedBoxId: 0,
						status: author$project$Types$Default
					});
				return _Utils_Tuple2(
					newModel,
					author$project$State$expandElements(_Utils_Tuple0));
			case 'ResetExport':
				var newModel = _Utils_update(
					model,
					{_export: ''});
				return _Utils_Tuple2(newModel, elm$core$Platform$Cmd$none);
			case 'PageNameChanged':
				var newPageName = msg.a;
				var newModel = _Utils_update(
					model,
					{pageName: newPageName});
				return _Utils_Tuple2(newModel, elm$core$Platform$Cmd$none);
			case 'PageTitleChanged':
				var newPageTitle = msg.a;
				var newModel = _Utils_update(
					model,
					{pageTitle: newPageTitle});
				return _Utils_Tuple2(newModel, elm$core$Platform$Cmd$none);
			case 'ResetImport':
				var newModel = _Utils_update(
					model,
					{import_: false});
				return _Utils_Tuple2(newModel, elm$core$Platform$Cmd$none);
			case 'SetImport':
				var importString = msg.a;
				var newModel = _Utils_update(
					model,
					{importString: importString});
				return _Utils_Tuple2(newModel, elm$core$Platform$Cmd$none);
			case 'Import':
				var newModel = _Utils_update(
					model,
					{
						document: author$project$Box$jsonStringToDocument(model.importString),
						import_: false
					});
				return _Utils_Tuple2(newModel, elm$core$Platform$Cmd$none);
			case 'ResetOdlModal':
				var newModel = _Utils_update(
					model,
					{odlString: '', status: author$project$Types$Default});
				return _Utils_Tuple2(newModel, elm$core$Platform$Cmd$none);
			case 'SetOdlString':
				var odlString = msg.a;
				var newModel = _Utils_update(
					model,
					{odlString: odlString});
				return _Utils_Tuple2(newModel, elm$core$Platform$Cmd$none);
			case 'ApplyOdl':
				var odlParserModel = {basket: '', boxes: _List_Nil, currentBoxes: _List_Nil, level: 0, parent: 0, status: author$project$Types$Unresolved};
				var newModel = _Utils_update(
					model,
					{
						document: A2(author$project$Odl$odlToBoxes, model.odlString, odlParserModel),
						status: author$project$Types$Default
					});
				return _Utils_Tuple2(newModel, elm$core$Platform$Cmd$none);
			case 'ViewOdlModal':
				var children = A2(author$project$Box$boxesByParentId, 0, model);
				var boxesToOdlStrings = A2(
					elm$core$List$map,
					A2(author$project$Odl$boxToOdl, model, 0),
					children);
				var odlString = A3(
					elm$core$List$foldr,
					elm$core$Basics$append,
					'',
					A2(elm$core$List$intersperse, '\n\n', boxesToOdlStrings));
				var newModel = _Utils_update(
					model,
					{odlString: odlString});
				return _Utils_Tuple2(newModel, elm$core$Platform$Cmd$none);
			default:
				var machine_name = msg.a;
				var newModel = function () {
					switch (machine_name) {
						case 'add_solid_box':
							return author$project$Box$isDocumentEmpty(model) ? author$project$Box$documentValidityIncrement(
								_Utils_update(
									model,
									{document: author$project$Box$documentWithOneBox})) : _Utils_update(
								model,
								{status: author$project$Types$SolidBoxAdditionShowOptions});
						case 'add_solid_box_before':
							return _Utils_update(
								model,
								{status: author$project$Types$SolidBoxAdditionBeforeChooseBox});
						case 'add_solid_box_after':
							return _Utils_update(
								model,
								{status: author$project$Types$SolidBoxAdditionAfterChooseBox});
						case 'add_solid_box_inside_first':
							return _Utils_update(
								model,
								{status: author$project$Types$SolidBoxAdditionInsideFirstChooseBox});
						case 'add_solid_box_inside_last':
							return _Utils_update(
								model,
								{status: author$project$Types$SolidBoxAdditionInsideLastChooseBox});
						case 'add_liquid_box':
							return author$project$Box$isDocumentEmpty(model) ? author$project$Box$documentValidityIncrement(
								_Utils_update(
									model,
									{document: author$project$Box$documentWithOneBox})) : _Utils_update(
								model,
								{status: author$project$Types$LiquidBoxAdditionShowOptions});
						case 'add_liquid_box_before':
							return _Utils_update(
								model,
								{status: author$project$Types$LiquidBoxAdditionBeforeChooseBox});
						case 'add_liquid_box_after':
							return _Utils_update(
								model,
								{status: author$project$Types$LiquidBoxAdditionAfterChooseBox});
						case 'add_liquid_box_inside_first':
							return _Utils_update(
								model,
								{status: author$project$Types$LiquidBoxAdditionInsideFirstChooseBox});
						case 'add_liquid_box_inside_last':
							return _Utils_update(
								model,
								{status: author$project$Types$LiquidBoxAdditionInsideLastChooseBox});
						case 'remove_label':
							return _Utils_update(
								model,
								{status: author$project$Types$RemoveLabelChooseBox});
						case 'add_label':
							return _Utils_update(
								model,
								{status: author$project$Types$AddLabelChooseBox});
						case 'remove_box':
							return _Utils_update(
								model,
								{status: author$project$Types$RemoveBoxChooseBox});
						case 'export':
							return _Utils_update(
								model,
								{
									_export: author$project$Box$documentToJsonString(model)
								});
						case 'import':
							return _Utils_update(
								model,
								{import_: true});
						case 'duplicate_box':
							return _Utils_update(
								model,
								{status: author$project$Types$DuplicateBoxChooseBox});
						case 'duplicate_box_before':
							return _Utils_update(
								model,
								{status: author$project$Types$DuplicateBoxBeforeChooseBox});
						case 'duplicate_box_after':
							return _Utils_update(
								model,
								{status: author$project$Types$DuplicateBoxAfterChooseBox});
						case 'duplicate_box_inside_first':
							return _Utils_update(
								model,
								{status: author$project$Types$DuplicateBoxInsideFirstChooseBox});
						case 'duplicate_box_inside_last':
							return _Utils_update(
								model,
								{status: author$project$Types$DuplicateBoxInsideLastChooseBox});
						case 'move_box':
							return _Utils_update(
								model,
								{status: author$project$Types$MoveBoxChooseBox});
						case 'edit_box':
							return _Utils_update(
								model,
								{status: author$project$Types$EditBoxChooseBox});
						case 'view_odl':
							var children = A2(author$project$Box$boxesByParentId, 0, model);
							var boxesToOdlStrings = A2(
								elm$core$List$map,
								A2(author$project$Odl$boxToOdl, model, 0),
								children);
							var odlString = A3(
								elm$core$List$foldr,
								elm$core$Basics$append,
								'',
								A2(elm$core$List$intersperse, '\n\n', boxesToOdlStrings));
							return _Utils_update(
								model,
								{odlString: odlString, status: author$project$Types$ViewOdl});
						default:
							return model;
					}
				}();
				return _Utils_Tuple2(
					newModel,
					author$project$State$expandElements(_Utils_Tuple0));
		}
	});
var elm$html$Html$span = _VirtualDom_node('span');
var elm$virtual_dom$VirtualDom$text = _VirtualDom_text;
var elm$html$Html$text = elm$virtual_dom$VirtualDom$text;
var elm$html$Html$Attributes$stringProperty = F2(
	function (key, string) {
		return A2(
			_VirtualDom_property,
			key,
			elm$json$Json$Encode$string(string));
	});
var elm$html$Html$Attributes$class = elm$html$Html$Attributes$stringProperty('className');
var author$project$Box$labelToHtml = F2(
	function (content, _n0) {
		var labelOwner = _n0.a;
		return A2(
			elm$html$Html$span,
			_List_fromArray(
				[
					elm$html$Html$Attributes$class('box-label')
				]),
			_List_fromArray(
				[
					elm$html$Html$text(content)
				]));
	});
var author$project$Box$liquidBoxToHtml = F2(
	function (content, _n0) {
		var liquidBox = _n0.a;
		return elm$html$Html$text(content);
	});
var author$project$Box$processBoxType = function (boxTypeValue) {
	if (boxTypeValue.$ === 'SolidBox') {
		return 'solid_box';
	} else {
		return 'liquid_box';
	}
};
var author$project$Types$AddLabel = function (a) {
	return {$: 'AddLabel', a: a};
};
var author$project$Types$DuplicateBoxAfter = function (a) {
	return {$: 'DuplicateBoxAfter', a: a};
};
var author$project$Types$DuplicateBoxBefore = function (a) {
	return {$: 'DuplicateBoxBefore', a: a};
};
var author$project$Types$DuplicateBoxInsideFirst = function (a) {
	return {$: 'DuplicateBoxInsideFirst', a: a};
};
var author$project$Types$DuplicateBoxInsideLast = function (a) {
	return {$: 'DuplicateBoxInsideLast', a: a};
};
var author$project$Types$DuplicateBoxSelectBox = function (a) {
	return {$: 'DuplicateBoxSelectBox', a: a};
};
var author$project$Types$EditBoxSelectBox = function (a) {
	return {$: 'EditBoxSelectBox', a: a};
};
var author$project$Types$LiquidBoxAdditionAfter = function (a) {
	return {$: 'LiquidBoxAdditionAfter', a: a};
};
var author$project$Types$LiquidBoxAdditionBefore = function (a) {
	return {$: 'LiquidBoxAdditionBefore', a: a};
};
var author$project$Types$LiquidBoxAdditionInsideFirst = function (a) {
	return {$: 'LiquidBoxAdditionInsideFirst', a: a};
};
var author$project$Types$LiquidBoxAdditionInsideLast = function (a) {
	return {$: 'LiquidBoxAdditionInsideLast', a: a};
};
var author$project$Types$MoveBoxSelectBox = function (a) {
	return {$: 'MoveBoxSelectBox', a: a};
};
var author$project$Types$RemoveBox = function (a) {
	return {$: 'RemoveBox', a: a};
};
var author$project$Types$RemoveLabel = function (a) {
	return {$: 'RemoveLabel', a: a};
};
var author$project$Types$SelectBox = function (a) {
	return {$: 'SelectBox', a: a};
};
var author$project$Types$SolidBoxAdditionAfter = function (a) {
	return {$: 'SolidBoxAdditionAfter', a: a};
};
var author$project$Types$SolidBoxAdditionBefore = function (a) {
	return {$: 'SolidBoxAdditionBefore', a: a};
};
var author$project$Types$SolidBoxAdditionInsideFirst = function (a) {
	return {$: 'SolidBoxAdditionInsideFirst', a: a};
};
var author$project$Types$SolidBoxAdditionInsideLast = function (a) {
	return {$: 'SolidBoxAdditionInsideLast', a: a};
};
var elm$html$Html$div = _VirtualDom_node('div');
var elm$html$Html$Attributes$id = elm$html$Html$Attributes$stringProperty('id');
var elm$virtual_dom$VirtualDom$MayStopPropagation = function (a) {
	return {$: 'MayStopPropagation', a: a};
};
var elm$virtual_dom$VirtualDom$on = _VirtualDom_on;
var elm$html$Html$Events$stopPropagationOn = F2(
	function (event, decoder) {
		return A2(
			elm$virtual_dom$VirtualDom$on,
			event,
			elm$virtual_dom$VirtualDom$MayStopPropagation(decoder));
	});
var author$project$Box$boxToHtml = F2(
	function (model, _n0) {
		var boxToBeConvertedToHtml = _n0.a;
		var restOfContent = function () {
			if (_Utils_eq(boxToBeConvertedToHtml.type_, author$project$Types$LiquidBox)) {
				return _List_fromArray(
					[
						A2(
						author$project$Box$liquidBoxToHtml,
						A2(elm$core$Maybe$withDefault, '', boxToBeConvertedToHtml.content),
						author$project$Types$Box(boxToBeConvertedToHtml))
					]);
			} else {
				var children = A2(author$project$Box$boxesByParentId, boxToBeConvertedToHtml.id, model);
				return A2(author$project$Box$boxesToHtml, children, model);
			}
		}();
		var label = function () {
			var _n1 = boxToBeConvertedToHtml.label;
			if (_n1.$ === 'Just') {
				var justLabel = _n1.a;
				return _List_fromArray(
					[
						A2(
						author$project$Box$labelToHtml,
						justLabel,
						author$project$Types$Box(boxToBeConvertedToHtml))
					]);
			} else {
				return _List_Nil;
			}
		}();
		var classes = _Utils_ap(
			author$project$Box$processBoxType(boxToBeConvertedToHtml.type_),
			_Utils_eq(model.selectedBoxId, boxToBeConvertedToHtml.id) ? ' selected' : '');
		var attributes = _Utils_eq(model.status, author$project$Types$SolidBoxAdditionBeforeChooseBox) ? _List_fromArray(
			[
				A2(
				elm$html$Html$Events$stopPropagationOn,
				'click',
				elm$json$Json$Decode$succeed(
					_Utils_Tuple2(
						author$project$Types$SolidBoxAdditionBefore(boxToBeConvertedToHtml.id),
						true))),
				A2(
				elm$html$Html$Events$stopPropagationOn,
				'mouseover',
				elm$json$Json$Decode$succeed(
					_Utils_Tuple2(
						author$project$Types$SelectBox(boxToBeConvertedToHtml.id),
						true)))
			]) : ((_Utils_eq(model.status, author$project$Types$LiquidBoxAdditionBeforeChooseBox) && _Utils_eq(boxToBeConvertedToHtml.type_, author$project$Types$LiquidBox)) ? _List_fromArray(
			[
				A2(
				elm$html$Html$Events$stopPropagationOn,
				'click',
				elm$json$Json$Decode$succeed(
					_Utils_Tuple2(
						author$project$Types$LiquidBoxAdditionBefore(boxToBeConvertedToHtml.id),
						true))),
				A2(
				elm$html$Html$Events$stopPropagationOn,
				'mouseover',
				elm$json$Json$Decode$succeed(
					_Utils_Tuple2(
						author$project$Types$SelectBox(boxToBeConvertedToHtml.id),
						true)))
			]) : (_Utils_eq(model.status, author$project$Types$SolidBoxAdditionAfterChooseBox) ? _List_fromArray(
			[
				A2(
				elm$html$Html$Events$stopPropagationOn,
				'click',
				elm$json$Json$Decode$succeed(
					_Utils_Tuple2(
						author$project$Types$SolidBoxAdditionAfter(boxToBeConvertedToHtml.id),
						true))),
				A2(
				elm$html$Html$Events$stopPropagationOn,
				'mouseover',
				elm$json$Json$Decode$succeed(
					_Utils_Tuple2(
						author$project$Types$SelectBox(boxToBeConvertedToHtml.id),
						true)))
			]) : ((_Utils_eq(model.status, author$project$Types$LiquidBoxAdditionAfterChooseBox) && _Utils_eq(boxToBeConvertedToHtml.type_, author$project$Types$LiquidBox)) ? _List_fromArray(
			[
				A2(
				elm$html$Html$Events$stopPropagationOn,
				'click',
				elm$json$Json$Decode$succeed(
					_Utils_Tuple2(
						author$project$Types$LiquidBoxAdditionAfter(boxToBeConvertedToHtml.id),
						true))),
				A2(
				elm$html$Html$Events$stopPropagationOn,
				'mouseover',
				elm$json$Json$Decode$succeed(
					_Utils_Tuple2(
						author$project$Types$SelectBox(boxToBeConvertedToHtml.id),
						true)))
			]) : ((_Utils_eq(model.status, author$project$Types$SolidBoxAdditionInsideFirstChooseBox) && _Utils_eq(boxToBeConvertedToHtml.type_, author$project$Types$SolidBox)) ? _List_fromArray(
			[
				A2(
				elm$html$Html$Events$stopPropagationOn,
				'click',
				elm$json$Json$Decode$succeed(
					_Utils_Tuple2(
						author$project$Types$SolidBoxAdditionInsideFirst(boxToBeConvertedToHtml.id),
						true))),
				A2(
				elm$html$Html$Events$stopPropagationOn,
				'mouseover',
				elm$json$Json$Decode$succeed(
					_Utils_Tuple2(
						author$project$Types$SelectBox(boxToBeConvertedToHtml.id),
						true)))
			]) : ((_Utils_eq(model.status, author$project$Types$LiquidBoxAdditionInsideFirstChooseBox) && _Utils_eq(boxToBeConvertedToHtml.type_, author$project$Types$SolidBox)) ? _List_fromArray(
			[
				A2(
				elm$html$Html$Events$stopPropagationOn,
				'click',
				elm$json$Json$Decode$succeed(
					_Utils_Tuple2(
						author$project$Types$LiquidBoxAdditionInsideFirst(boxToBeConvertedToHtml.id),
						true))),
				A2(
				elm$html$Html$Events$stopPropagationOn,
				'mouseover',
				elm$json$Json$Decode$succeed(
					_Utils_Tuple2(
						author$project$Types$SelectBox(boxToBeConvertedToHtml.id),
						true)))
			]) : ((_Utils_eq(model.status, author$project$Types$SolidBoxAdditionInsideLastChooseBox) && _Utils_eq(boxToBeConvertedToHtml.type_, author$project$Types$SolidBox)) ? _List_fromArray(
			[
				A2(
				elm$html$Html$Events$stopPropagationOn,
				'click',
				elm$json$Json$Decode$succeed(
					_Utils_Tuple2(
						author$project$Types$SolidBoxAdditionInsideLast(boxToBeConvertedToHtml.id),
						true))),
				A2(
				elm$html$Html$Events$stopPropagationOn,
				'mouseover',
				elm$json$Json$Decode$succeed(
					_Utils_Tuple2(
						author$project$Types$SelectBox(boxToBeConvertedToHtml.id),
						true)))
			]) : ((_Utils_eq(model.status, author$project$Types$LiquidBoxAdditionInsideLastChooseBox) && _Utils_eq(boxToBeConvertedToHtml.type_, author$project$Types$SolidBox)) ? _List_fromArray(
			[
				A2(
				elm$html$Html$Events$stopPropagationOn,
				'click',
				elm$json$Json$Decode$succeed(
					_Utils_Tuple2(
						author$project$Types$LiquidBoxAdditionInsideLast(boxToBeConvertedToHtml.id),
						true))),
				A2(
				elm$html$Html$Events$stopPropagationOn,
				'mouseover',
				elm$json$Json$Decode$succeed(
					_Utils_Tuple2(
						author$project$Types$SelectBox(boxToBeConvertedToHtml.id),
						true)))
			]) : ((_Utils_eq(model.status, author$project$Types$RemoveLabelChooseBox) && (!_Utils_eq(boxToBeConvertedToHtml.label, elm$core$Maybe$Nothing))) ? _List_fromArray(
			[
				A2(
				elm$html$Html$Events$stopPropagationOn,
				'click',
				elm$json$Json$Decode$succeed(
					_Utils_Tuple2(
						author$project$Types$RemoveLabel(boxToBeConvertedToHtml.id),
						true))),
				A2(
				elm$html$Html$Events$stopPropagationOn,
				'mouseover',
				elm$json$Json$Decode$succeed(
					_Utils_Tuple2(
						author$project$Types$SelectBox(boxToBeConvertedToHtml.id),
						true)))
			]) : ((_Utils_eq(model.status, author$project$Types$AddLabelChooseBox) && _Utils_eq(boxToBeConvertedToHtml.label, elm$core$Maybe$Nothing)) ? _List_fromArray(
			[
				A2(
				elm$html$Html$Events$stopPropagationOn,
				'click',
				elm$json$Json$Decode$succeed(
					_Utils_Tuple2(
						author$project$Types$AddLabel(boxToBeConvertedToHtml.id),
						true))),
				A2(
				elm$html$Html$Events$stopPropagationOn,
				'mouseover',
				elm$json$Json$Decode$succeed(
					_Utils_Tuple2(
						author$project$Types$SelectBox(boxToBeConvertedToHtml.id),
						true)))
			]) : (_Utils_eq(model.status, author$project$Types$RemoveBoxChooseBox) ? _List_fromArray(
			[
				A2(
				elm$html$Html$Events$stopPropagationOn,
				'click',
				elm$json$Json$Decode$succeed(
					_Utils_Tuple2(
						author$project$Types$RemoveBox(boxToBeConvertedToHtml.id),
						true))),
				A2(
				elm$html$Html$Events$stopPropagationOn,
				'mouseover',
				elm$json$Json$Decode$succeed(
					_Utils_Tuple2(
						author$project$Types$SelectBox(boxToBeConvertedToHtml.id),
						true)))
			]) : (_Utils_eq(model.status, author$project$Types$EditBoxChooseBox) ? _List_fromArray(
			[
				A2(
				elm$html$Html$Events$stopPropagationOn,
				'click',
				elm$json$Json$Decode$succeed(
					_Utils_Tuple2(
						author$project$Types$EditBoxSelectBox(boxToBeConvertedToHtml.id),
						true))),
				A2(
				elm$html$Html$Events$stopPropagationOn,
				'mouseover',
				elm$json$Json$Decode$succeed(
					_Utils_Tuple2(
						author$project$Types$SelectBox(boxToBeConvertedToHtml.id),
						true)))
			]) : (_Utils_eq(model.status, author$project$Types$DuplicateBoxChooseBox) ? _List_fromArray(
			[
				A2(
				elm$html$Html$Events$stopPropagationOn,
				'click',
				elm$json$Json$Decode$succeed(
					_Utils_Tuple2(
						author$project$Types$DuplicateBoxSelectBox(boxToBeConvertedToHtml.id),
						true))),
				A2(
				elm$html$Html$Events$stopPropagationOn,
				'mouseover',
				elm$json$Json$Decode$succeed(
					_Utils_Tuple2(
						author$project$Types$SelectBox(boxToBeConvertedToHtml.id),
						true)))
			]) : (_Utils_eq(model.status, author$project$Types$DuplicateBoxBeforeChooseBox) ? _List_fromArray(
			[
				A2(
				elm$html$Html$Events$stopPropagationOn,
				'click',
				elm$json$Json$Decode$succeed(
					_Utils_Tuple2(
						author$project$Types$DuplicateBoxBefore(boxToBeConvertedToHtml.id),
						true))),
				A2(
				elm$html$Html$Events$stopPropagationOn,
				'mouseover',
				elm$json$Json$Decode$succeed(
					_Utils_Tuple2(
						author$project$Types$SelectBox(boxToBeConvertedToHtml.id),
						true)))
			]) : (_Utils_eq(model.status, author$project$Types$DuplicateBoxInsideFirstChooseBox) ? _List_fromArray(
			[
				A2(
				elm$html$Html$Events$stopPropagationOn,
				'click',
				elm$json$Json$Decode$succeed(
					_Utils_Tuple2(
						author$project$Types$DuplicateBoxInsideFirst(boxToBeConvertedToHtml.id),
						true))),
				A2(
				elm$html$Html$Events$stopPropagationOn,
				'mouseover',
				elm$json$Json$Decode$succeed(
					_Utils_Tuple2(
						author$project$Types$SelectBox(boxToBeConvertedToHtml.id),
						true)))
			]) : (_Utils_eq(model.status, author$project$Types$DuplicateBoxInsideLastChooseBox) ? _List_fromArray(
			[
				A2(
				elm$html$Html$Events$stopPropagationOn,
				'click',
				elm$json$Json$Decode$succeed(
					_Utils_Tuple2(
						author$project$Types$DuplicateBoxInsideLast(boxToBeConvertedToHtml.id),
						true))),
				A2(
				elm$html$Html$Events$stopPropagationOn,
				'mouseover',
				elm$json$Json$Decode$succeed(
					_Utils_Tuple2(
						author$project$Types$SelectBox(boxToBeConvertedToHtml.id),
						true)))
			]) : (_Utils_eq(model.status, author$project$Types$DuplicateBoxAfterChooseBox) ? _List_fromArray(
			[
				A2(
				elm$html$Html$Events$stopPropagationOn,
				'click',
				elm$json$Json$Decode$succeed(
					_Utils_Tuple2(
						author$project$Types$DuplicateBoxAfter(boxToBeConvertedToHtml.id),
						true))),
				A2(
				elm$html$Html$Events$stopPropagationOn,
				'mouseover',
				elm$json$Json$Decode$succeed(
					_Utils_Tuple2(
						author$project$Types$SelectBox(boxToBeConvertedToHtml.id),
						true)))
			]) : (_Utils_eq(model.status, author$project$Types$MoveBoxChooseBox) ? _List_fromArray(
			[
				A2(
				elm$html$Html$Events$stopPropagationOn,
				'click',
				elm$json$Json$Decode$succeed(
					_Utils_Tuple2(
						author$project$Types$MoveBoxSelectBox(boxToBeConvertedToHtml.id),
						true))),
				A2(
				elm$html$Html$Events$stopPropagationOn,
				'mouseover',
				elm$json$Json$Decode$succeed(
					_Utils_Tuple2(
						author$project$Types$SelectBox(boxToBeConvertedToHtml.id),
						true)))
			]) : _List_Nil)))))))))))))))));
		return A2(
			elm$html$Html$div,
			_Utils_ap(
				attributes,
				_List_fromArray(
					[
						elm$html$Html$Attributes$class(classes),
						elm$html$Html$Attributes$id(
						'box' + elm$core$String$fromInt(boxToBeConvertedToHtml.id))
					])),
			_Utils_ap(label, restOfContent));
	});
var author$project$Box$boxesToHtml = F2(
	function (boxes, model) {
		return A2(
			elm$core$List$map,
			author$project$Box$boxToHtml(model),
			boxes);
	});
var author$project$LabelProcessor$handleElementEnd = function (element) {
	var _n0 = element.name;
	if (_n0 === 'biu') {
		return '</u></i></b>';
	} else {
		return '';
	}
};
var author$project$ModuleHandler$modules = _List_fromArray(
	['biu', 'bulma']);
var elm$core$List$any = F2(
	function (isOkay, list) {
		any:
		while (true) {
			if (!list.b) {
				return false;
			} else {
				var x = list.a;
				var xs = list.b;
				if (isOkay(x)) {
					return true;
				} else {
					var $temp$isOkay = isOkay,
						$temp$list = xs;
					isOkay = $temp$isOkay;
					list = $temp$list;
					continue any;
				}
			}
		}
	});
var author$project$ModuleHandler$hasModule = function (name) {
	return A2(
		elm$core$List$any,
		function (module_name) {
			return _Utils_eq(module_name, name) ? true : false;
		},
		author$project$ModuleHandler$modules);
};
var author$project$LabelProcessor$labelElementEndingTagToString = function (labelElement) {
	return ((!labelElement.endingTag) || (!elm$core$String$length(labelElement.name))) ? '' : (author$project$ModuleHandler$hasModule(labelElement.name) ? author$project$LabelProcessor$handleElementEnd(labelElement) : ('</' + (labelElement.name + '>')));
};
var author$project$LabelProcessor$handleElementStart = function (element) {
	var _n0 = element.name;
	switch (_n0) {
		case 'biu':
			return '<b><i><u>';
		case 'bulma':
			return '<link rel=\'stylesheet\' href=\'https://cdn.jsdelivr.net/npm/bulma@0.7.4/css/bulma.min.css\'/>';
		default:
			return '';
	}
};
var author$project$LabelProcessor$labelElementStartingTagToString = function (labelElement) {
	var id = elm$core$String$length(labelElement.id) ? (' id=\"' + (labelElement.id + '\"')) : '';
	var htmlAttributes = elm$core$String$length(labelElement.htmlAttributes) ? (' ' + labelElement.htmlAttributes) : '';
	var ending = labelElement.endingTag ? '>' : '/>';
	var classes = elm$core$String$length(labelElement.classes) ? (' class=\"' + (labelElement.classes + '\"')) : '';
	return (!elm$core$String$length(labelElement.name)) ? '' : (author$project$ModuleHandler$hasModule(labelElement.name) ? author$project$LabelProcessor$handleElementStart(labelElement) : ('<' + (labelElement.name + (id + (classes + (htmlAttributes + ending))))));
};
var author$project$Box$boxToHtmlString = F2(
	function (model, _n0) {
		var box = _n0.a;
		var boxContentRight = A3(
			elm$core$List$foldl,
			elm$core$Basics$append,
			'',
			A2(elm$core$List$map, author$project$LabelProcessor$labelElementEndingTagToString, box.labelElements));
		var boxContentLeft = A3(
			elm$core$List$foldr,
			elm$core$Basics$append,
			'',
			A2(elm$core$List$map, author$project$LabelProcessor$labelElementStartingTagToString, box.labelElements));
		var boxContentInner = _Utils_eq(box.type_, author$project$Types$SolidBox) ? A3(
			elm$core$List$foldr,
			elm$core$Basics$append,
			'',
			A2(
				elm$core$List$map,
				author$project$Box$boxToHtmlString(model),
				A2(author$project$Box$boxesByParentId, box.id, model))) : A2(elm$core$Maybe$withDefault, '', box.content);
		return _Utils_ap(
			boxContentLeft,
			_Utils_ap(boxContentInner, boxContentRight));
	});
var author$project$Box$documentToHtmlString = function (model) {
	var boxesInRoot = A2(author$project$Box$boxesByParentId, 0, model);
	var boxesInRootStringified = A2(
		elm$core$List$map,
		author$project$Box$boxToHtmlString(model),
		boxesInRoot);
	var documentHtmlString = A3(elm$core$List$foldr, elm$core$Basics$append, '', boxesInRootStringified);
	return documentHtmlString;
};
var author$project$Box$escapeString = function (string) {
	var encodedString = A2(
		elm$json$Json$Encode$encode,
		0,
		elm$json$Json$Encode$string(string));
	var encodedStringLength = elm$core$String$length(encodedString);
	return A3(elm$core$String$slice, 1, encodedStringLength - 1, encodedString);
};
var author$project$Types$LabelUpdate = F2(
	function (a, b) {
		return {$: 'LabelUpdate', a: a, b: b};
	});
var author$project$Types$LiquidBoxUpdate = F2(
	function (a, b) {
		return {$: 'LiquidBoxUpdate', a: a, b: b};
	});
var elm$html$Html$input = _VirtualDom_node('input');
var elm$html$Html$textarea = _VirtualDom_node('textarea');
var elm$virtual_dom$VirtualDom$attribute = F2(
	function (key, value) {
		return A2(
			_VirtualDom_attribute,
			_VirtualDom_noOnOrFormAction(key),
			_VirtualDom_noJavaScriptOrHtmlUri(value));
	});
var elm$html$Html$Attributes$attribute = elm$virtual_dom$VirtualDom$attribute;
var elm$virtual_dom$VirtualDom$Normal = function (a) {
	return {$: 'Normal', a: a};
};
var elm$html$Html$Events$on = F2(
	function (event, decoder) {
		return A2(
			elm$virtual_dom$VirtualDom$on,
			event,
			elm$virtual_dom$VirtualDom$Normal(decoder));
	});
var elm$json$Json$Decode$at = F2(
	function (fields, decoder) {
		return A3(elm$core$List$foldr, elm$json$Json$Decode$field, decoder, fields);
	});
var elm$html$Html$Events$targetValue = A2(
	elm$json$Json$Decode$at,
	_List_fromArray(
		['target', 'value']),
	elm$json$Json$Decode$string);
var author$project$BoxEditor$boxToBoxEditorHtml = F2(
	function (_n0, model) {
		var box = _n0.a;
		return _List_fromArray(
			[
				A2(
				elm$html$Html$div,
				_List_fromArray(
					[
						elm$html$Html$Attributes$class('message')
					]),
				_List_fromArray(
					[
						A2(
						elm$html$Html$div,
						_List_fromArray(
							[
								elm$html$Html$Attributes$class('message-body')
							]),
						_List_fromArray(
							[
								elm$html$Html$text('Press Escape to get back. Any change is applied immediately.')
							]))
					])),
				A2(
				elm$html$Html$div,
				_List_fromArray(
					[
						elm$html$Html$Attributes$class('field')
					]),
				_List_fromArray(
					[
						A2(
						elm$html$Html$div,
						_List_fromArray(
							[
								elm$html$Html$Attributes$class('label')
							]),
						_List_fromArray(
							[
								elm$html$Html$text('Label: ')
							])),
						A2(
						elm$html$Html$div,
						_List_fromArray(
							[
								elm$html$Html$Attributes$class('control')
							]),
						_List_fromArray(
							[
								A2(
								elm$html$Html$input,
								_List_fromArray(
									[
										elm$html$Html$Attributes$class('input'),
										A2(
										elm$html$Html$Attributes$attribute,
										'value',
										function () {
											var _n1 = box.label;
											if (_n1.$ === 'Just') {
												var label = _n1.a;
												return label;
											} else {
												return '';
											}
										}()),
										A2(
										elm$html$Html$Events$on,
										'keyup',
										A2(
											elm$json$Json$Decode$map,
											author$project$Types$LabelUpdate(box.id),
											elm$html$Html$Events$targetValue))
									]),
								_List_Nil)
							]))
					])),
				A2(
				elm$html$Html$div,
				_List_fromArray(
					[
						elm$html$Html$Attributes$class('field')
					]),
				_List_fromArray(
					[
						A2(
						elm$html$Html$div,
						_List_fromArray(
							[
								elm$html$Html$Attributes$class('label')
							]),
						_List_fromArray(
							[
								elm$html$Html$text('Content: ')
							])),
						A2(
						elm$html$Html$div,
						_List_fromArray(
							[
								elm$html$Html$Attributes$class('control')
							]),
						_List_fromArray(
							[
								A2(
								elm$html$Html$textarea,
								_List_fromArray(
									[
										elm$html$Html$Attributes$class('textarea'),
										A2(elm$html$Html$Attributes$attribute, 'rows', '10'),
										A2(
										elm$html$Html$Events$on,
										'keyup',
										A2(
											elm$json$Json$Decode$map,
											author$project$Types$LiquidBoxUpdate(box.id),
											elm$html$Html$Events$targetValue))
									]),
								_List_fromArray(
									[
										elm$html$Html$text(
										function () {
											if (_Utils_eq(box.type_, author$project$Types$SolidBox)) {
												return A3(
													author$project$Odl$boxContentToOdl,
													author$project$Types$Box(box),
													model,
													0);
											} else {
												var _n2 = box.content;
												if (_n2.$ === 'Just') {
													var content = _n2.a;
													return content;
												} else {
													return '';
												}
											}
										}())
									]))
							]))
					]))
			]);
	});
var author$project$Box$innerHtmlDecoder = A2(
	elm$json$Json$Decode$at,
	_List_fromArray(
		['target', 'innerHTML']),
	elm$json$Json$Decode$string);
var author$project$Types$MenuItemClicked = function (a) {
	return {$: 'MenuItemClicked', a: a};
};
var elm$html$Html$Attributes$type_ = elm$html$Html$Attributes$stringProperty('type');
var elm$html$Html$Attributes$value = elm$html$Html$Attributes$stringProperty('value');
var elm$html$Html$Events$onClick = function (msg) {
	return A2(
		elm$html$Html$Events$on,
		'click',
		elm$json$Json$Decode$succeed(msg));
};
var author$project$Menu$menuItemToHtml = function (menuItemToBeConverted) {
	return A2(
		elm$html$Html$div,
		_List_fromArray(
			[
				elm$html$Html$Attributes$class('column is-narrow')
			]),
		_List_fromArray(
			[
				A2(
				elm$html$Html$input,
				_List_fromArray(
					[
						elm$html$Html$Attributes$type_('button'),
						elm$html$Html$Attributes$value(menuItemToBeConverted.name),
						elm$html$Html$Attributes$class('button'),
						elm$html$Html$Events$onClick(
						author$project$Types$MenuItemClicked(menuItemToBeConverted.machineName))
					]),
				_List_Nil)
			]));
};
var author$project$Menu$menuItemsToHtml = function (menuItemsToBeConverted) {
	return A2(elm$core$List$map, author$project$Menu$menuItemToHtml, menuItemsToBeConverted);
};
var author$project$Types$PageNameChanged = function (a) {
	return {$: 'PageNameChanged', a: a};
};
var author$project$Types$PageTitleChanged = function (a) {
	return {$: 'PageTitleChanged', a: a};
};
var elm$html$Html$a = _VirtualDom_node('a');
var elm$html$Html$b = _VirtualDom_node('b');
var elm$html$Html$button = _VirtualDom_node('button');
var elm$html$Html$i = _VirtualDom_node('i');
var elm$html$Html$nav = _VirtualDom_node('nav');
var elm$json$Json$Encode$bool = _Json_wrap;
var elm$html$Html$Attributes$boolProperty = F2(
	function (key, bool) {
		return A2(
			_VirtualDom_property,
			key,
			elm$json$Json$Encode$bool(bool));
	});
var elm$html$Html$Attributes$contenteditable = elm$html$Html$Attributes$boolProperty('contentEditable');
var elm$html$Html$Attributes$href = function (url) {
	return A2(
		elm$html$Html$Attributes$stringProperty,
		'href',
		_VirtualDom_noJavaScriptUri(url));
};
var author$project$Menu$generateMenu = function (model) {
	var menuHeader = _List_fromArray(
		[
			A2(
			elm$html$Html$div,
			_List_fromArray(
				[
					elm$html$Html$Attributes$id('menu_header'),
					elm$html$Html$Attributes$class('columns is-variable is-1 is-vcentered')
				]),
			_List_fromArray(
				[
					A2(
					elm$html$Html$div,
					_List_fromArray(
						[
							elm$html$Html$Attributes$class('column is-narrow')
						]),
					_List_fromArray(
						[
							A2(
							elm$html$Html$a,
							_List_fromArray(
								[
									elm$html$Html$Attributes$href('../'),
									elm$html$Html$Attributes$class('level-item button')
								]),
							_List_fromArray(
								[
									A2(
									elm$html$Html$span,
									_List_fromArray(
										[
											elm$html$Html$Attributes$class('icon is-small')
										]),
									_List_fromArray(
										[
											A2(
											elm$html$Html$i,
											_List_fromArray(
												[
													elm$html$Html$Attributes$class('fas fa-arrow-left')
												]),
											_List_Nil)
										])),
									A2(
									elm$html$Html$span,
									_List_Nil,
									_List_fromArray(
										[
											elm$html$Html$text('back')
										]))
								]))
						])),
					A2(
					elm$html$Html$div,
					_List_fromArray(
						[
							elm$html$Html$Attributes$class('column is-narrow')
						]),
					_List_fromArray(
						[
							A2(
							elm$html$Html$a,
							_List_fromArray(
								[
									elm$html$Html$Attributes$class('level-item button'),
									A2(elm$html$Html$Attributes$attribute, 'href', '../../' + model.pageName),
									A2(elm$html$Html$Attributes$attribute, 'target', '__parent')
								]),
							_List_fromArray(
								[
									A2(
									elm$html$Html$span,
									_List_fromArray(
										[
											elm$html$Html$Attributes$class('icon is-small')
										]),
									_List_fromArray(
										[
											A2(
											elm$html$Html$i,
											_List_fromArray(
												[
													elm$html$Html$Attributes$class('fas fa-eye')
												]),
											_List_Nil)
										])),
									A2(
									elm$html$Html$span,
									_List_Nil,
									_List_fromArray(
										[
											elm$html$Html$text('view')
										]))
								]))
						])),
					A2(
					elm$html$Html$div,
					_List_fromArray(
						[
							elm$html$Html$Attributes$class('column is-narrow')
						]),
					_List_fromArray(
						[
							A2(
							elm$html$Html$button,
							_List_fromArray(
								[
									elm$html$Html$Attributes$class('button is-success is-outlined'),
									A2(elm$html$Html$Attributes$attribute, 'type', 'submit')
								]),
							_List_fromArray(
								[
									A2(
									elm$html$Html$span,
									_List_fromArray(
										[
											elm$html$Html$Attributes$class('icon is-small')
										]),
									_List_fromArray(
										[
											A2(
											elm$html$Html$i,
											_List_fromArray(
												[
													elm$html$Html$Attributes$class('fas fa-save')
												]),
											_List_Nil)
										])),
									A2(
									elm$html$Html$span,
									_List_Nil,
									_List_fromArray(
										[
											elm$html$Html$text('save')
										]))
								]))
						])),
					A2(
					elm$html$Html$div,
					_List_fromArray(
						[
							elm$html$Html$Attributes$class('column is-narrow')
						]),
					_List_fromArray(
						[
							A2(
							elm$html$Html$b,
							_List_fromArray(
								[
									elm$html$Html$Attributes$class('level-item')
								]),
							_List_fromArray(
								[
									elm$html$Html$text('Name:')
								]))
						])),
					A2(
					elm$html$Html$div,
					_List_fromArray(
						[
							elm$html$Html$Attributes$class('column is-narrow')
						]),
					_List_fromArray(
						[
							A2(
							elm$html$Html$span,
							_List_fromArray(
								[
									elm$html$Html$Attributes$class('level-item')
								]),
							_List_fromArray(
								[
									A2(
									elm$html$Html$div,
									_List_fromArray(
										[
											elm$html$Html$Attributes$contenteditable(true),
											A2(
											elm$html$Html$Events$on,
											'blur',
											A2(elm$json$Json$Decode$map, author$project$Types$PageNameChanged, author$project$Box$innerHtmlDecoder))
										]),
									_List_fromArray(
										[
											elm$html$Html$text(model.pageName)
										]))
								]))
						])),
					A2(
					elm$html$Html$div,
					_List_fromArray(
						[
							elm$html$Html$Attributes$class('column is-narrow')
						]),
					_List_fromArray(
						[
							A2(
							elm$html$Html$b,
							_List_fromArray(
								[
									elm$html$Html$Attributes$class('level-item')
								]),
							_List_fromArray(
								[
									elm$html$Html$text('Title:')
								]))
						])),
					A2(
					elm$html$Html$div,
					_List_fromArray(
						[
							elm$html$Html$Attributes$class('column is-narrow')
						]),
					_List_fromArray(
						[
							A2(
							elm$html$Html$span,
							_List_fromArray(
								[
									elm$html$Html$Attributes$class('level-item')
								]),
							_List_fromArray(
								[
									A2(
									elm$html$Html$div,
									_List_fromArray(
										[
											elm$html$Html$Attributes$contenteditable(true),
											A2(
											elm$html$Html$Events$on,
											'blur',
											A2(elm$json$Json$Decode$map, author$project$Types$PageTitleChanged, author$project$Box$innerHtmlDecoder))
										]),
									_List_fromArray(
										[
											elm$html$Html$text(model.pageTitle)
										]))
								]))
						]))
				]))
		]);
	var menuContent = function () {
		if (_Utils_eq(model.status, author$project$Types$SolidBoxAdditionShowOptions)) {
			return author$project$Menu$menuItemsToHtml(
				_List_fromArray(
					[
						A2(author$project$Menu$menuItem, '+before', 'add_solid_box_before'),
						A2(author$project$Menu$menuItem, '+inside (first)', 'add_solid_box_inside_first'),
						A2(author$project$Menu$menuItem, '+inside (last)', 'add_solid_box_inside_last'),
						A2(author$project$Menu$menuItem, '+after', 'add_solid_box_after')
					]));
		} else {
			if (_Utils_eq(model.status, author$project$Types$LiquidBoxAdditionShowOptions)) {
				return author$project$Menu$menuItemsToHtml(
					_List_fromArray(
						[
							A2(author$project$Menu$menuItem, '+before', 'add_liquid_box_before'),
							A2(author$project$Menu$menuItem, '+inside (first)', 'add_liquid_box_inside_first'),
							A2(author$project$Menu$menuItem, '+inside (last)', 'add_liquid_box_inside_last'),
							A2(author$project$Menu$menuItem, '+after', 'add_liquid_box_after')
						]));
			} else {
				if (_Utils_eq(model.status, author$project$Types$DuplicateBoxShowOptions)) {
					return author$project$Menu$menuItemsToHtml(
						_List_fromArray(
							[
								A2(author$project$Menu$menuItem, '+before', 'duplicate_box_before'),
								A2(author$project$Menu$menuItem, '+inside (first)', 'duplicate_box_inside_first'),
								A2(author$project$Menu$menuItem, '+inside (last)', 'duplicate_box_inside_last'),
								A2(author$project$Menu$menuItem, '+after', 'duplicate_box_after')
							]));
				} else {
					if (_Utils_eq(model.status, author$project$Types$SolidBoxAdditionBeforeChooseBox)) {
						return _List_fromArray(
							[
								A2(
								elm$html$Html$div,
								_List_fromArray(
									[
										elm$html$Html$Attributes$class('column')
									]),
								_List_fromArray(
									[
										elm$html$Html$text('Choose box before which you want to insert the new solid box.')
									]))
							]);
					} else {
						if (_Utils_eq(model.status, author$project$Types$LiquidBoxAdditionBeforeChooseBox)) {
							return _List_fromArray(
								[
									A2(
									elm$html$Html$div,
									_List_fromArray(
										[
											elm$html$Html$Attributes$class('column')
										]),
									_List_fromArray(
										[
											elm$html$Html$text('Choose box before which you want to insert the new liquid box.')
										]))
								]);
						} else {
							if (_Utils_eq(model.status, author$project$Types$SolidBoxAdditionAfterChooseBox)) {
								return _List_fromArray(
									[
										A2(
										elm$html$Html$div,
										_List_fromArray(
											[
												elm$html$Html$Attributes$class('column')
											]),
										_List_fromArray(
											[
												elm$html$Html$text('Choose box after which you want to insert the new solid box.')
											]))
									]);
							} else {
								if (_Utils_eq(model.status, author$project$Types$LiquidBoxAdditionAfterChooseBox)) {
									return _List_fromArray(
										[
											A2(
											elm$html$Html$div,
											_List_fromArray(
												[
													elm$html$Html$Attributes$class('column')
												]),
											_List_fromArray(
												[
													elm$html$Html$text('Choose box after which you want to insert the new liquid box.')
												]))
										]);
								} else {
									if (_Utils_eq(model.status, author$project$Types$SolidBoxAdditionInsideFirstChooseBox)) {
										return _List_fromArray(
											[
												A2(
												elm$html$Html$div,
												_List_fromArray(
													[
														elm$html$Html$Attributes$class('column')
													]),
												_List_fromArray(
													[
														elm$html$Html$text('Choose box inside which you want to insert the new solid box as the first item.')
													]))
											]);
									} else {
										if (_Utils_eq(model.status, author$project$Types$SolidBoxAdditionInsideLastChooseBox)) {
											return _List_fromArray(
												[
													A2(
													elm$html$Html$div,
													_List_fromArray(
														[
															elm$html$Html$Attributes$class('column')
														]),
													_List_fromArray(
														[
															elm$html$Html$text('Choose box inside which you want to insert the new solid box as the last item.')
														]))
												]);
										} else {
											if (_Utils_eq(model.status, author$project$Types$RemoveLabelChooseBox)) {
												return _List_fromArray(
													[
														A2(
														elm$html$Html$div,
														_List_fromArray(
															[
																elm$html$Html$Attributes$class('column')
															]),
														_List_fromArray(
															[
																elm$html$Html$text('Choose box whose label you want to be removed.')
															]))
													]);
											} else {
												if (_Utils_eq(model.status, author$project$Types$EditBoxChooseBox)) {
													return _List_fromArray(
														[
															A2(
															elm$html$Html$div,
															_List_fromArray(
																[
																	elm$html$Html$Attributes$class('column')
																]),
															_List_fromArray(
																[
																	elm$html$Html$text('Choose box which you want to edit.')
																]))
														]);
												} else {
													if (_Utils_eq(model.status, author$project$Types$AddLabelChooseBox)) {
														return _List_fromArray(
															[
																A2(
																elm$html$Html$div,
																_List_fromArray(
																	[
																		elm$html$Html$Attributes$class('column')
																	]),
																_List_fromArray(
																	[
																		elm$html$Html$text('Choose box you want to add the new label in.')
																	]))
															]);
													} else {
														if (_Utils_eq(model.status, author$project$Types$RemoveBoxChooseBox)) {
															return _List_fromArray(
																[
																	A2(
																	elm$html$Html$div,
																	_List_fromArray(
																		[
																			elm$html$Html$Attributes$class('column')
																		]),
																	_List_fromArray(
																		[
																			elm$html$Html$text('Choose box which you want to be removed.')
																		]))
																]);
														} else {
															if (_Utils_eq(model.status, author$project$Types$DuplicateBoxChooseBox)) {
																return _List_fromArray(
																	[
																		A2(
																		elm$html$Html$div,
																		_List_fromArray(
																			[
																				elm$html$Html$Attributes$class('column')
																			]),
																		_List_fromArray(
																			[
																				elm$html$Html$text('Choose box which you want to duplicate.')
																			]))
																	]);
															} else {
																if (_Utils_eq(model.status, author$project$Types$DuplicateBoxBeforeChooseBox)) {
																	return _List_fromArray(
																		[
																			A2(
																			elm$html$Html$div,
																			_List_fromArray(
																				[
																					elm$html$Html$Attributes$class('column')
																				]),
																			_List_fromArray(
																				[
																					elm$html$Html$text('Choose box before which you want to place the duplicated box.')
																				]))
																		]);
																} else {
																	if (_Utils_eq(model.status, author$project$Types$DuplicateBoxInsideFirstChooseBox)) {
																		return _List_fromArray(
																			[
																				A2(
																				elm$html$Html$div,
																				_List_fromArray(
																					[
																						elm$html$Html$Attributes$class('column')
																					]),
																				_List_fromArray(
																					[
																						elm$html$Html$text('Choose box inside which you want to place the duplicated box as the first item.')
																					]))
																			]);
																	} else {
																		if (_Utils_eq(model.status, author$project$Types$DuplicateBoxInsideLastChooseBox)) {
																			return _List_fromArray(
																				[
																					A2(
																					elm$html$Html$div,
																					_List_fromArray(
																						[
																							elm$html$Html$Attributes$class('column')
																						]),
																					_List_fromArray(
																						[
																							elm$html$Html$text('Choose box inside which you want to place the duplicated box as the last item.')
																						]))
																				]);
																		} else {
																			if (_Utils_eq(model.status, author$project$Types$DuplicateBoxAfterChooseBox)) {
																				return _List_fromArray(
																					[
																						A2(
																						elm$html$Html$div,
																						_List_fromArray(
																							[
																								elm$html$Html$Attributes$class('column')
																							]),
																						_List_fromArray(
																							[
																								elm$html$Html$text('Choose box after which you want to place the duplicated box.')
																							]))
																					]);
																			} else {
																				if (_Utils_eq(model.status, author$project$Types$MoveBoxChooseBox)) {
																					return _List_fromArray(
																						[
																							A2(
																							elm$html$Html$div,
																							_List_fromArray(
																								[
																									elm$html$Html$Attributes$class('column')
																								]),
																							_List_fromArray(
																								[
																									elm$html$Html$text('Choose box which you want to move.')
																								]))
																						]);
																				} else {
																					var _n0 = model.menuMessage;
																					if (_n0.$ === 'Just') {
																						var justMessage = _n0.a;
																						return _List_fromArray(
																							[
																								A2(
																								elm$html$Html$div,
																								_List_fromArray(
																									[
																										elm$html$Html$Attributes$class('column')
																									]),
																								_List_fromArray(
																									[
																										elm$html$Html$text(justMessage)
																									]))
																							]);
																					} else {
																						return author$project$Menu$menuItemsToHtml(model.menu);
																					}
																				}
																			}
																		}
																	}
																}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}();
	return A2(
		elm$html$Html$nav,
		_List_fromArray(
			[
				elm$html$Html$Attributes$class('main-menu'),
				elm$html$Html$Attributes$id('menu')
			]),
		_List_fromArray(
			[
				A2(
				elm$html$Html$div,
				_List_fromArray(
					[
						elm$html$Html$Attributes$class('container')
					]),
				menuHeader),
				A2(
				elm$html$Html$div,
				_List_fromArray(
					[
						elm$html$Html$Attributes$class('container')
					]),
				_List_fromArray(
					[
						A2(
						elm$html$Html$div,
						_List_fromArray(
							[
								elm$html$Html$Attributes$class('columns is-variable is-1')
							]),
						menuContent)
					]))
			]));
};
var author$project$Types$ApplyOdl = {$: 'ApplyOdl'};
var author$project$Types$Import = {$: 'Import'};
var author$project$Types$ResetExport = {$: 'ResetExport'};
var author$project$Types$ResetImport = {$: 'ResetImport'};
var author$project$Types$ResetOdlModal = {$: 'ResetOdlModal'};
var author$project$Types$SetImport = function (a) {
	return {$: 'SetImport', a: a};
};
var author$project$Types$SetOdlString = function (a) {
	return {$: 'SetOdlString', a: a};
};
var elm$html$Html$form = _VirtualDom_node('form');
var author$project$View$view = function (model) {
	var odl_modal = _Utils_eq(model.status, author$project$Types$ViewOdl) ? _List_fromArray(
		[
			A2(
			elm$html$Html$div,
			_List_fromArray(
				[
					elm$html$Html$Attributes$class('modal is-active'),
					elm$html$Html$Attributes$id('odl')
				]),
			_List_fromArray(
				[
					A2(
					elm$html$Html$div,
					_List_fromArray(
						[
							elm$html$Html$Attributes$class('modal-background'),
							elm$html$Html$Events$onClick(author$project$Types$ResetOdlModal)
						]),
					_List_Nil),
					A2(
					elm$html$Html$div,
					_List_fromArray(
						[
							elm$html$Html$Attributes$class('modal-content')
						]),
					_List_fromArray(
						[
							A2(
							elm$html$Html$div,
							_List_fromArray(
								[
									elm$html$Html$Attributes$class('box')
								]),
							_List_fromArray(
								[
									A2(
									elm$html$Html$div,
									_List_fromArray(
										[
											elm$html$Html$Attributes$class('field')
										]),
									_List_fromArray(
										[
											A2(
											elm$html$Html$div,
											_List_fromArray(
												[
													elm$html$Html$Attributes$class('control')
												]),
											_List_fromArray(
												[
													A2(
													elm$html$Html$textarea,
													_List_fromArray(
														[
															elm$html$Html$Attributes$class('textarea'),
															A2(elm$html$Html$Attributes$attribute, 'rows', '20'),
															A2(
															elm$html$Html$Events$on,
															'blur',
															A2(elm$json$Json$Decode$map, author$project$Types$SetOdlString, elm$html$Html$Events$targetValue))
														]),
													_List_fromArray(
														[
															elm$html$Html$text(model.odlString)
														]))
												]))
										])),
									A2(
									elm$html$Html$div,
									_List_fromArray(
										[
											elm$html$Html$Attributes$class('field')
										]),
									_List_fromArray(
										[
											A2(
											elm$html$Html$div,
											_List_fromArray(
												[
													elm$html$Html$Attributes$class('control')
												]),
											_List_fromArray(
												[
													A2(
													elm$html$Html$button,
													_List_fromArray(
														[
															elm$html$Html$Events$onClick(author$project$Types$ApplyOdl),
															elm$html$Html$Attributes$class('button is-success')
														]),
													_List_fromArray(
														[
															elm$html$Html$text('Apply ODL')
														]))
												]))
										]))
								]))
						])),
					A2(
					elm$html$Html$button,
					_List_fromArray(
						[
							elm$html$Html$Attributes$class('modal-close is-large'),
							A2(elm$html$Html$Attributes$attribute, 'aria-label', 'close'),
							elm$html$Html$Events$onClick(author$project$Types$ResetOdlModal)
						]),
					_List_Nil)
				]))
		]) : _List_Nil;
	var import_modal = model.import_ ? _List_fromArray(
		[
			A2(
			elm$html$Html$div,
			_List_fromArray(
				[
					elm$html$Html$Attributes$class('modal is-active'),
					elm$html$Html$Attributes$id('import')
				]),
			_List_fromArray(
				[
					A2(
					elm$html$Html$div,
					_List_fromArray(
						[
							elm$html$Html$Attributes$class('modal-background'),
							elm$html$Html$Events$onClick(author$project$Types$ResetImport)
						]),
					_List_Nil),
					A2(
					elm$html$Html$div,
					_List_fromArray(
						[
							elm$html$Html$Attributes$class('modal-content')
						]),
					_List_fromArray(
						[
							A2(
							elm$html$Html$div,
							_List_fromArray(
								[
									elm$html$Html$Attributes$class('box')
								]),
							_List_fromArray(
								[
									A2(
									elm$html$Html$div,
									_List_fromArray(
										[
											elm$html$Html$Attributes$class('field')
										]),
									_List_fromArray(
										[
											A2(
											elm$html$Html$div,
											_List_fromArray(
												[
													elm$html$Html$Attributes$class('control')
												]),
											_List_fromArray(
												[
													A2(
													elm$html$Html$textarea,
													_List_fromArray(
														[
															elm$html$Html$Attributes$class('textarea'),
															A2(
															elm$html$Html$Events$on,
															'blur',
															A2(elm$json$Json$Decode$map, author$project$Types$SetImport, elm$html$Html$Events$targetValue))
														]),
													_List_Nil)
												]))
										])),
									A2(
									elm$html$Html$div,
									_List_fromArray(
										[
											elm$html$Html$Attributes$class('field')
										]),
									_List_fromArray(
										[
											A2(
											elm$html$Html$div,
											_List_fromArray(
												[
													elm$html$Html$Attributes$class('control')
												]),
											_List_fromArray(
												[
													A2(
													elm$html$Html$button,
													_List_fromArray(
														[
															elm$html$Html$Events$onClick(author$project$Types$Import),
															elm$html$Html$Attributes$class('button is-success')
														]),
													_List_fromArray(
														[
															elm$html$Html$text('Import')
														]))
												]))
										]))
								]))
						])),
					A2(
					elm$html$Html$button,
					_List_fromArray(
						[
							elm$html$Html$Attributes$class('modal-close is-large'),
							A2(elm$html$Html$Attributes$attribute, 'aria-label', 'close'),
							elm$html$Html$Events$onClick(author$project$Types$ResetImport)
						]),
					_List_Nil)
				]))
		]) : _List_Nil;
	var form_content = _List_fromArray(
		[
			A2(
			elm$html$Html$input,
			_List_fromArray(
				[
					A2(elm$html$Html$Attributes$attribute, 'type', 'hidden'),
					A2(elm$html$Html$Attributes$attribute, 'name', 'content'),
					A2(
					elm$html$Html$Attributes$attribute,
					'value',
					author$project$Box$escapeString(
						author$project$Box$documentToJsonString(model)))
				]),
			_List_Nil),
			A2(
			elm$html$Html$input,
			_List_fromArray(
				[
					A2(elm$html$Html$Attributes$attribute, 'type', 'hidden'),
					A2(elm$html$Html$Attributes$attribute, 'name', 'template_content'),
					A2(
					elm$html$Html$Attributes$attribute,
					'value',
					author$project$Box$escapeString(
						author$project$Box$documentToHtmlString(model)))
				]),
			_List_Nil),
			A2(
			elm$html$Html$input,
			_List_fromArray(
				[
					A2(elm$html$Html$Attributes$attribute, 'type', 'hidden'),
					A2(elm$html$Html$Attributes$attribute, 'name', 'name'),
					A2(elm$html$Html$Attributes$attribute, 'value', model.pageName)
				]),
			_List_Nil),
			A2(
			elm$html$Html$input,
			_List_fromArray(
				[
					A2(elm$html$Html$Attributes$attribute, 'type', 'hidden'),
					A2(elm$html$Html$Attributes$attribute, 'name', 'title'),
					A2(elm$html$Html$Attributes$attribute, 'value', model.pageTitle)
				]),
			_List_Nil),
			A2(
			elm$html$Html$input,
			_List_fromArray(
				[
					A2(elm$html$Html$Attributes$attribute, 'type', 'hidden'),
					A2(elm$html$Html$Attributes$attribute, 'name', 'csrfmiddlewaretoken'),
					A2(elm$html$Html$Attributes$attribute, 'value', model.csrfToken)
				]),
			_List_Nil)
		]);
	var export_modal = elm$core$String$length(model._export) ? _List_fromArray(
		[
			A2(
			elm$html$Html$div,
			_List_fromArray(
				[
					elm$html$Html$Attributes$class('modal is-active'),
					elm$html$Html$Attributes$id('export')
				]),
			_List_fromArray(
				[
					A2(
					elm$html$Html$div,
					_List_fromArray(
						[
							elm$html$Html$Attributes$class('modal-background'),
							elm$html$Html$Events$onClick(author$project$Types$ResetExport)
						]),
					_List_Nil),
					A2(
					elm$html$Html$div,
					_List_fromArray(
						[
							elm$html$Html$Attributes$class('modal-content')
						]),
					_List_fromArray(
						[
							A2(
							elm$html$Html$div,
							_List_fromArray(
								[
									elm$html$Html$Attributes$class('box')
								]),
							_List_fromArray(
								[
									elm$html$Html$text(model._export)
								]))
						])),
					A2(
					elm$html$Html$button,
					_List_fromArray(
						[
							elm$html$Html$Attributes$class('modal-close is-large'),
							A2(elm$html$Html$Attributes$attribute, 'aria-label', 'close'),
							elm$html$Html$Events$onClick(author$project$Types$ResetExport)
						]),
					_List_Nil)
				]))
		]) : _List_Nil;
	return A2(
		elm$html$Html$div,
		_List_fromArray(
			[
				elm$html$Html$Attributes$id('document')
			]),
		_List_fromArray(
			[
				A2(
				elm$html$Html$form,
				_List_fromArray(
					[
						A2(elm$html$Html$Attributes$attribute, 'method', 'POST'),
						A2(elm$html$Html$Attributes$attribute, 'action', '')
					]),
				_List_fromArray(
					[
						author$project$Menu$generateMenu(model)
					])),
				A2(
				elm$html$Html$div,
				_List_Nil,
				_Utils_ap(
					_List_Nil,
					_Utils_ap(
						export_modal,
						_Utils_ap(
							import_modal,
							_Utils_ap(odl_modal, form_content))))),
				A2(
				elm$html$Html$div,
				_List_fromArray(
					[
						elm$html$Html$Attributes$id('playground'),
						elm$html$Html$Attributes$class('container')
					]),
				function () {
					if (!_Utils_eq(model.status, author$project$Types$EditBox)) {
						return A2(
							author$project$Box$boxesToHtml,
							A2(author$project$Box$boxesByParentId, 0, model),
							model);
					} else {
						var maybeBox = A2(author$project$Box$boxById, model.selectedBoxId, model);
						if (maybeBox.$ === 'Just') {
							var box = maybeBox.a.a;
							return A2(
								author$project$BoxEditor$boxToBoxEditorHtml,
								author$project$Types$Box(box),
								model);
						} else {
							return _List_fromArray(
								[
									elm$html$Html$text('The box doesn\'t exist!')
								]);
						}
					}
				}())
			]));
};
var elm$browser$Browser$element = _Browser_element;
var author$project$Main$main = elm$browser$Browser$element(
	{init: author$project$State$initialModel, subscriptions: author$project$State$subscriptions, update: author$project$State$update, view: author$project$View$view});
_Platform_export({'Main':{'init':author$project$Main$main(
	A2(
		elm$json$Json$Decode$andThen,
		function (pageTitle) {
			return A2(
				elm$json$Json$Decode$andThen,
				function (pageName) {
					return A2(
						elm$json$Json$Decode$andThen,
						function (csrfToken) {
							return A2(
								elm$json$Json$Decode$andThen,
								function (content) {
									return elm$json$Json$Decode$succeed(
										{content: content, csrfToken: csrfToken, pageName: pageName, pageTitle: pageTitle});
								},
								A2(elm$json$Json$Decode$field, 'content', elm$json$Json$Decode$string));
						},
						A2(elm$json$Json$Decode$field, 'csrfToken', elm$json$Json$Decode$string));
				},
				A2(elm$json$Json$Decode$field, 'pageName', elm$json$Json$Decode$string));
		},
		A2(elm$json$Json$Decode$field, 'pageTitle', elm$json$Json$Decode$string)))(0)}});}(this));