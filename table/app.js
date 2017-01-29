import {
  ProseEditor, ProseEditorConfigurator, EditorSession,
  ProseEditorPackage, ImagePackage
} from 'substance'

import fixture from './fixture'
import TablePackage from './table/TablePackage'

let cfg = new ProseEditorConfigurator()
cfg.import(ProseEditorPackage)
cfg.import(TablePackage)

window.onload = function() {
  let doc = cfg.createArticle(fixture)
  let editorSession = new EditorSession(doc, {
    configurator: cfg
  })
  ProseEditor.mount({
    editorSession: editorSession
  }, document.body)
}
