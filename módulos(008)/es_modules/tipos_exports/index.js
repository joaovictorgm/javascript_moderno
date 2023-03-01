import {inline} from "./inline.js"//nomeação inline
import defaultInline from "./inline.js"
import { group } from "./non_inline.js"//nomeação em outra parte do arquivo
import exportDefault from "./non_inline.js"

inline()
defaultInline()

group()
exportDefault()