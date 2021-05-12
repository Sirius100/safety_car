import {userAgent} from './userAgent.js'
import {clearcss} from './disableCss.js'
import {question_visible} from './questDisplay.js'


// удаляет стартовые css
clearcss();

// определяет какой браузер и какую сss подключить
userAgent();


// "аккардеон"
question_visible();
