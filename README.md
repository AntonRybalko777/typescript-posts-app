ТЗ:
На TypeScript используя React (так же React Router DOM, mobx или redux, + можно любую библиотеку компонентов) написать веб-приложение на три страницы + меню :
1. главная - доступна всем (вывести любую инфу из стейт менеджера загруженную в него с любого открытого эндпинта, к примеру https://jsonplaceholder.typicode.com/posts )
2. авторизация - доступна не авторизированному (поля логин и пароль, юзер хардкодом записан в стейт)
3. админ - доступна, только, авторизированному (показать кнопку разлогинивания)
Все страницы подгружаются ленивой загрузкой, пункты в меню отображаются в соответсвии с авторизацией.


login: "admin", password: "admin"
