//clsx 
//幫助className更好寫的東東

//安裝
npm install --save clsx

//import 
import clsx from "clsx"

//1.控制不同狀態className的顯示
const buttonClass = clsx('button', {
    'active': isActive,
    'disabled': isDisabled
  });

  //button是永久存在的
  //"active"會根據isActive的布林值決定會否顯示

//2.直接寫判斷在className
className={clsx(styles.navLink, location.pathname === item.to && styles.active)}
//當location.pathname===item.to為true
//才會顯示styles.active

//*styles要先把css模組化才可以import使用