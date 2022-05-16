const initialState = {
    dataUsers:[{
        id: 1,
        nombre: 'camilo padilla',
        cargo: 'Associate Proserve Consultant at Amazon Web Services (AWS)',
        imgPerfil: 'https://cdn.pixabay.com/photo/2017/04/01/21/06/portrait-2194457__340.jpg',
        descripcion: 'Estamos aquí para ayudar a las empresas a crear mejores productos digitales, soluciones de onboarding, sitios públicos y experiencias transaccionales.',
        post: 'https://media-exp1.licdn.com/dms/image/sync/C4D27AQGhhNtaq-zbIg/articleshare-shrink_800/0/1652351518897?e=1653170400&v=beta&t=M8UC5Gq-jJJCsEy7ikXeNavTI3nROy9IUwD_yIyz5ME',
        fecha: '2022-03-29',
        like: false,
        countLike: Math.round(Math.random() * 1000),
        comentarios: Math.round(Math.random() * 300),
    },
    {
        id:2,
        nombre: 'Sebas Sánchez Tiberio',
        cargo: 'Economist I Specialist in Development Projects I Agile methodologies I Digital transformation',
        imgPerfil: 'https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166__340.jpg',
        descripcion: '¿Quieres tener la oportunidad de trabajar en un ambiente creativo y formar parte de una cultura joven, flexible y orientada al bienestar de nuestro equipo? 🙌',
        post: 'https://media-exp1.licdn.com/dms/image/C4E22AQG9NfqXXjCTPw/feedshare-shrink_800/0/1652458150492?e=1655337600&v=beta&t=zSEUe24kGLV94xR07Ni6VscnHNFCjy9L1T4WmERr2fQ',
        fecha: '2021-08-29',
        like: false,
        countLike: Math.round(Math.random() * 1000),
        comentarios: Math.round(Math.random() * 300),
    },
    {
        id:3,
        nombre: 'Sophos Solutions',
        cargo: 'Empresa • Servicios y tecnologías de la información',
        imgPerfil: 'https://cdn.pixabay.com/photo/2017/02/16/23/10/smile-2072907__340.jpg',
        descripcion: 'A diferencia de otras tecnologías de deshierbe, este robot utiliza láseres de alta potencia para erradicar las malas hierbas, sin perturbar el suelo evitando el uso de herbicidas.',
        post: undefined,
        fecha: '2022-04-23',
        like: false,
        countLike: Math.round(Math.random() * 1000),
        comentarios: Math.round(Math.random() * 300),
    },
    {
        id: 4,
        nombre: 'Valentina Plazas Ramirez',
        cargo: 'Recruiting Analyst en Globant , software developer',
        imgPerfil: 'https://cdn.pixabay.com/photo/2016/11/29/13/14/attractive-1869761__340.jpg',
        descripcion: '#ATENCIÓN ¡El café colombiano se toma España! Con una nueva alianza, Juan Valdez Café abrirá más de 100 establecimientos durante los próximos cinco años bajo el modelo de franquicias.',
        post: 'https://media-exp1.licdn.com/dms/image/C5622AQFSyLy5ywOM4A/feedshare-shrink_800/0/1652154629782?e=1655337600&v=beta&t=MIkaF5lVuqNo3fP-BQw58aFAG0toDp_EnlD-HmJrBLk',
        fecha: '2022-04-09',
        like: false,
        countLike: Math.round(Math.random() * 1000),
        comentarios: Math.round(Math.random() * 300),
    },
    {
        id: 5,
        nombre: 'Gloria Andrea Cortes Duarte',
        cargo: 'Director de Talento Humano en Bancoldex',
        imgPerfil: 'https://cdn.pixabay.com/photo/2017/02/06/10/54/sad-2042536__340.jpg',
        descripcion: 'Startups are like rockets: if everything was not on fire it would not be flying.',
        post: undefined,
        fecha: '2022-02-9',
        like: false,
        countLike: Math.round(Math.random() * 1000),
        comentarios: Math.round(Math.random() * 300),
    },
    {
        id: 6,
        nombre: 'Nathália Ramos',
        cargo: 'Tech Recruiter | People Experience | Psychology Student & Researcher | LGBTQIA+',
        imgPerfil: 'https://cdn.pixabay.com/photo/2017/06/15/11/40/beautiful-2405131__340.jpg',
        descripcion: 'Hoy me uno a su celebración #17 dando las gracias por confiar en todo su equipo de trabajo 💪🏼',
        post: undefined,
        fecha: '2022-04-23',
        like: false,
        countLike: Math.round(Math.random() * 1000),
        comentarios: Math.round(Math.random() * 300),
    },
    {
        id: 7,
        nombre: 'Jhon Alejandro Fernández Parra',
        cargo: 'Director de Talento Humano | Gerente de Talento Humano',
        imgPerfil: 'https://cdn.pixabay.com/photo/2020/12/21/19/05/window-5850628__340.png',
        descripcion: 'Conéctate con una nueva sesión de #AcademiaInternacional SENA | La Embajada de Japón, te contará las oportunidades de estudio en el país asiático.',
        post: 'https://media-exp1.licdn.com/dms/image/C4E22AQG4ILQ97aKxGg/feedshare-shrink_800/0/1651957250384?e=1655337600&v=beta&t=qN-kFCT3zA7LI9bHyNx9YGmqETmOG47k1VWCws8CxHM',
        fecha: '2022-04-23',
        like: false,
        countLike: Math.round(Math.random() * 1000),
        comentarios: Math.round(Math.random() * 300),
    },
    {
        id: 8,
        nombre: 'Julián Vergara Albán',
        cargo: 'Talent Acquisition Lead at TEAM International',
        imgPerfil: 'https://cdn.pixabay.com/photo/2015/01/08/18/30/entrepreneur-593371__340.jpg',
        descripcion: 'De las cosas más difíciles que debemos afrontar es la adaptación al cambio, pero sobre todo a las renuncias, sacrificios o ajustes que implican los movimientos',
        post: 'https://media-exp1.licdn.com/dms/image/sync/C4D27AQEq005o0VjUqg/articleshare-shrink_800/0/1651577517273?e=1653174000&v=beta&t=-UBs_NCCJN4gLp889aJlD-0BQkmXexjyHmYh78kVyw4',
        fecha: '2021-12-19',
        like: false,
        countLike: Math.round(Math.random() * 1000),
        comentarios: Math.round(Math.random() * 300),
    },
    {
        id: 9,
        nombre: 'Cristian Mahecha',
        cargo: 'Talent Acquisition and Development Lead en Lulo Bank | We’re hiring',
        imgPerfil: 'https://cdn.pixabay.com/photo/2019/02/19/08/43/milky-way-4006343__340.jpg',
        descripcion: 'Universidad Pontificia Bolivariana voy a poner él nombre de la U bien alto, hasta México hemos llegado y voy con toda ❤️🖤',
        post: undefined,
        fecha: '2022-04-3',
        like: false,
        countLike: Math.round(Math.random() * 1000),
        comentarios: Math.round(Math.random() * 300),
    },
    {
        id: 10,
        nombre: 'Valentina Cadena',
        cargo: 'Senior Talent Acquisition Specialist (YC W21)',
        imgPerfil: 'https://cdn.pixabay.com/photo/2018/01/16/16/48/adult-3086307__340.jpg',
        descripcion: '¡He empezado en un nuevo puesto de UI Designer en PRAGMA! Feliz y emocionada de comenzar este nuevo camino, cumpliendo metas para seguir creciendo.',
        post: undefined,
        fecha: '2022-03-22',
        like: false,
        countLike: Math.round(Math.random() * 1000),
        comentarios: Math.round(Math.random() * 300),
    }], 
    userSuggestion: [],
    activeLike: false,
    valueOne : 0,
    valueTwo : 3,
    idSelected: '',
    activeOptions: false,
    confirmDelete: false,
}

export const dataReducer = (state = initialState, action) => {

    switch(action.type) {

        case '@user/orderDate':
    
        return state, {
            ...state,
            dataUsers: action.payload
        }

        case '@user/getUsers':
        return state, {
            ...state,
            userSuggestion: state.dataUsers.slice(state.valueOne,state.valueTwo)
        }
        
        case '@user/updateUsers':
            let newValueOne = state.valueOne + 1;
            let newValueTwo = state.valueTwo + 1;

        return state, {
            ...state,
            valueOne: newValueOne,
            valueTwo: newValueTwo
        }

        case '@users/like':
            let id = action.payload.id;
            let resultUser = state.dataUsers.filter(user => user.id === id);

            resultUser.map(user => {
                if (user.like === false) {
                    user.like = action.payload.like
                    user.countLike += 1
                } else {
                    user.like = false
                    user.countLike -= 1
                }
            });

        return state, {
            ...state,
            activeLike: !state.activeLike,
        }

        case '@users/addPost':
        return state, {
            ...state,
            dataUsers: [...state.dataUsers, action.payload]
        }

        case '@users/optionsPost':
            let idPost = action.payload.id;
            
        return state, {
            ...state,
            idSelected: idPost
        }
        
        case '@users/activeOptionsPost':
        return state, {
            ...state,
            activeOptions: action.payload 
        }
        
        case '@users/delete':
            let idPostDelete = action.payload;

            state.dataUsers.forEach((item, index) => {
                if (item.id === idPostDelete) {
                    state.dataUsers.splice(index, 1);
                }
            })
            
        return state, {
            ...state,
            dataUsers: state.dataUsers, 
            activeOptions: false
        }

        default:
            return state
        }
    }

// funtions

export const orderArray = (order) => {
    return {
        type: '@user/orderDate',
        payload: order
    }
}

export const showUsers = () => {
    return {
        type: '@user/getUsers',
        payload: null
    }
}

export const updateSuggestions = () => {
    return {
        type: '@user/updateUsers',
        payload: null
    }
}

export const setLikePost = (id , like) => {
    return {
        type :'@users/like',
        payload: {
            id,
            like
        }
    }
}

export const addPost = (descripcion) => {

    return {
        type :'@users/addPost',
        payload: {
            id: Math.floor((Math.random() * (11 - 100 + 1)) + 100),
            nombre: 'Santiago Guillen Ramirez',
            correo: 'devsantiago@gmail.com',
            cargo: 'Analista - Desarrollador front-end Jr',
            imgPerfil: 'https://i.ibb.co/8bkstrq/profile-Img.jpg',
            descripcion: descripcion,
            post: undefined,
            fecha: "ahora",
            like: false,
            countLike: 0,
            comentarios: 0
        }
    }
}

export const showMenuOptions = (id , correo) => {
    return {
        type :'@users/optionsPost',
        payload: {
            id,
            correo
        }
    }
}

export const activeOptionsPost = (active) => {
    return {
        type :'@users/activeOptionsPost',
        payload: active
    }
}

export const deletePost = (id) => {
    return {
        type :'@users/delete',
        payload: id
    }
}