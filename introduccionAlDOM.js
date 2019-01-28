var Alumno = function (nombre, apellido) {
    this.nombre = '';
    this.apellido = '';
    this.cursos = [];
    this.novio = null;
    this.obtenerNotaEnCurso = function (tituloDelCurso) {
        var nota = null;

        for (var i = 0; i < this.cursos.length; i++) {
            var curso = this.cursos[i];
            if (curso.titulo == tituloDelCurso) {
                nota = curso.nota;
            }
        }

        return nota;
    }
}

var magui = {
    nombre: 'magui',
    apellido: 'di falco',
    cursos: [{
            titulo: 'html',
            desc: '',
            nota: 10
        },
        {
            titulo: 'css',
            desc: '',
            nota: 10
        },
        {
            titulo: 'JS1',
            desc: 'Curso de javascript 1',
            nota: 9
        },
        {
            titulo: 'JS2',
            desc: 'Curso de javascript 1',
            nota: null
        }
    ],
    novio: {
        nombreComplet: 'Damian Barletta',
        edad: 33
    },
    obtenerNotaEnCurso: function (tituloDelCurso) {
        var nota = null;

        for (var i = 0; i < this.cursos.length; i++) {
            var curso = this.cursos[i];
            if (curso.titulo == tituloDelCurso) {
                nota = curso.nota;
            }
        }

        return nota;
    }
}




var Doc = function () {
    this.head = null;
    this.body = null;

}

var Body = function () {
    this.children = [];
}

var Element = function () {
    this.id = null;
    this.name = null;
    this.content = null;
    this.class = [];
    this.children = []
}

var doc = {
    head: {
        title: "chuni",
        links: [{
                rel: "icon",
                type: 'image/x-icon',
                href: "favicon.ico"
            },
            {
                rel: "stylesheet",
                type: 'text/css',
                href: "screen"
            }
        ]
    },
    body: {
        children: [{
                nodeName: 'h1',
                id: 'titulo',
                content: 'Titulo de la pagina del chuni'
            },
            {
                nodeName: 'h2',
                content: 'Subtitulo'
            },
            {
                nodeName: 'p',
                id: "p1",
                class: ['parrafo'],
                content: 'This is the chuni paragraph 1'
            },
            {
                nodeName: 'p',
                id: "p2",
                content: 'This is the chuni paragraph 2'
            },
            {
                nodeName: 'p',
                id: "p3",
                class: ['parrafo'],
                content: 'This is the chuni paragraph 3'
            },
        ],

        scripts: [{
            src: "index.js",
            type: "application/javascript"
        }]
    },
    getElementById: function (elementId) {
        var element = null;

        for (var i = 0; i < this.body.children.length; i++) {
            var el = this.body.children[i];
            if (el.id == elementId) {
                element = el;
            }
        }

        return element;
    },
    getElementByClass: function (elementClass) {
        var elements = [];

        for (var i = 0; i < this.body.children.length; i++) {
            var el = this.body.children[i];
            if (el.class == elementClass) {
                elements.push(el);
            }
        }

        return elements;
    },
}