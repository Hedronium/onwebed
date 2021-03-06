module Types exposing (Box(..), BoxAttribute, BoxType(..), CurrentBox, DocumentStatus(..), FlagType, KeyInteractionType(..), LPModel, LabelElement, MenuItem, Model, Msg(..), OdlParserModel, OdlParserStatus(..))

-- label processor model


type alias LPModel =
    { firstCharacter : String
    , restOfCharacters : String
    , labelElement : LabelElement
    , labelElements : List LabelElement
    }


type alias LabelElement =
    { name : String
    , classes : String
    , id : String
    , htmlAttributes : String
    , endingTag : Bool
    }



-- Box type


type Box
    = Box
        { id : Int
        , label : Maybe String
        , labelElements : List LabelElement
        , content : Maybe String
        , parent : Int
        , type_ : BoxType
        }



-- Box type's type


type BoxType
    = SolidBox
    | LiquidBox



-- box attribute


type alias BoxAttribute =
    { name : String
    , value : String
    }



-- message


type Msg
    = AddBoxInside Box Int
    | SetLabel Int (Maybe String)
    | KeyInteraction KeyInteractionType String Bool
    | SolidBoxAdditionBefore Int
    | LiquidBoxAdditionBefore Int
    | SolidBoxAdditionAfter Int
    | LiquidBoxAdditionAfter Int
    | SolidBoxAdditionInsideFirst Int
    | LiquidBoxAdditionInsideFirst Int
    | SolidBoxAdditionInsideLast Int
    | LiquidBoxAdditionInsideLast Int
    | SelectBox Int
    | LabelUpdate Int String
    | LiquidBoxUpdate Int String
    | MenuItemClick String
    | RemoveBox Int
    | ResetExport
    | ResetImport
    | PageNameChange String
    | PageTitleChange String
    | Import
    | ResetOdlModal
    | SetImportString String
    | AdjustHeight Int
    | DuplicateBoxSelectBox Int
    | DuplicateBoxBefore Int
    | DuplicateBoxInsideFirst Int
    | DuplicateBoxInsideLast Int
    | DuplicateBoxAfter Int
    | MoveBoxSelectBox Int
    | EditBoxSelectBox Int
    | SetOdlString String
    | ApplyOdl
    | ApplyOdlInsideBox Int


type KeyInteractionType
    = Up
    | Down
    | Press



-- model


type alias Model =
    { document : List Box
    , documentDraft : List Box
    , menu : List MenuItem
    , status : DocumentStatus
    , menuMessage : Maybe String
    , selectedBoxId : Int
    , pageName : String
    , pageTitle : String
    , odlString : String
    , importString : String
    , csrfToken : String
    , duplicateSubjectId : Maybe Int
    , odlStringInsideBox : String
    , unsavedDraft : Bool
    }


type DocumentStatus
    = Default
    | SolidBoxAdditionOptions
    | LiquidBoxAdditionOptions
    | SolidBoxAdditionBeforeBoxSelection
    | LiquidBoxAdditionBeforeBoxSelection
    | SolidBoxAdditionAfterBoxSelection
    | LiquidBoxAdditionAfterBoxSelection
    | SolidBoxAdditionInsideFirstBoxSelection
    | LiquidBoxAdditionInsideFirstBoxSelection
    | SolidBoxAdditionInsideLastBoxSelection
    | LiquidBoxAdditionInsideLastBoxSelection
    | RemoveBoxBoxSelection
    | DuplicateBoxBoxSelection
    | DuplicateBoxOptions
    | DuplicateBoxBeforeBoxSelection
    | DuplicateBoxInsideFirstBoxSelection
    | DuplicateBoxInsideLastBoxSelection
    | DuplicateBoxAfterBoxSelection
    | MoveBoxBoxSelection
    | EditBoxBoxSelection
    | EditBoxModal
    | EditBoxUnsavedDraftWarning
    | ViewOdlModal
    | ViewOdlUnsavedDraftWarning
    | ImportModal
    | ExportModal
    

type alias MenuItem =
    { name : String
    , machineName : String
    }


type alias FlagType =
    { pageName : String
    , pageTitle : String
    , content : String
    , csrfToken : String
    }


type OdlParserStatus
    = Unresolved
    | ProcessingLiquidBox
    | ProcessingSolidBox
    | ProcessingLabelOfLiquidBox
    | ProcessingLabelOfSolidBox


type alias CurrentBox =
    { boxId : Int
    , level : Int
    }


type alias OdlParserModel =
    { boxes : List Box
    , status : OdlParserStatus
    , basket : String
    , currentBoxes : List CurrentBox
    , level : Int
    }
