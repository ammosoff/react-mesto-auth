// контекст текущего пользователя.
// используем контекст, чтобы все компоненты приложения могли получить
// доступ к этим данным. Контекст наполняется данными, которые загружаются с сервера. 
// Для этого в App создаётся стейт пользователя

import React from "react";

export const CurrentUserContext = React.createContext();

