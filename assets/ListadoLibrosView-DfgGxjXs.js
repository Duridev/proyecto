import{h as u,c as o,e as i,d as a,w as p,u as t,F as n,b as m,a as s,f as l,R as v,t as r}from"./index-DJHVqzFx.js";import{H as g}from"./Header-_nsncFVr.js";const b=[{id:1,titulo:"Cien años de soledad",autor:"Gabriel García Márquez",descripcion:"Una novela que narra la historia de la familia Buendía a lo largo de varias generaciones en el ficticio pueblo de Macondo."},{id:2,titulo:"1984",autor:"George Orwell",descripcion:"Una distopía sobre un régimen totalitario que utiliza la vigilancia, la censura y la manipulación para controlar a la población."},{id:3,titulo:"El principito",autor:"Antoine de Saint-Exupéry",descripcion:"Una historia filosófica y poética sobre un joven príncipe que viaja por varios planetas, aprendiendo sobre la vida y la naturaleza humana."},{id:4,titulo:"Matar a un ruiseñor",autor:"Harper Lee",descripcion:"Una novela sobre la injusticia racial en el sur de los Estados Unidos, vista a través de los ojos de una niña."},{id:5,titulo:"Orgullo y prejuicio",autor:"Jane Austen",descripcion:"Una historia romántica que explora las complejidades de la moralidad y el matrimonio en la sociedad inglesa del siglo XIX."},{id:6,titulo:"Don Quijote de la Mancha",autor:"Miguel de Cervantes",descripcion:"La historia de un hidalgo español que, influenciado por los libros de caballería, decide convertirse en caballero andante."},{id:7,titulo:"La Odisea",autor:"Homero",descripcion:"La epopeya clásica que narra las aventuras de Odiseo en su largo viaje de regreso a Ítaca después de la Guerra de Troya."},{id:8,titulo:"Crimen y castigo",autor:"Fiódor Dostoyevski",descripcion:"La historia de un joven estudiante que, impulsado por la pobreza y una teoría filosófica, comete un asesinato y enfrenta las consecuencias morales."},{id:9,titulo:"El gran Gatsby",autor:"F. Scott Fitzgerald",descripcion:"Una novela que examina el sueño americano a través de la vida de Jay Gatsby y su amor obsesivo por Daisy Buchanan."},{id:10,titulo:"En busca del tiempo perdido",autor:"Marcel Proust",descripcion:"Una obra monumental que explora temas de memoria, tiempo y la experiencia humana a través de la vida del narrador."},{id:11,titulo:"Ulises",autor:"James Joyce",descripcion:"Una novela compleja que sigue las vidas de varios personajes en Dublín a lo largo de un solo día."},{id:12,titulo:"Los miserables",autor:"Victor Hugo",descripcion:"Una obra que explora la injusticia social en la Francia del siglo XIX a través de la vida de Jean Valjean, un exconvicto."},{id:13,titulo:"Madame Bovary",autor:"Gustave Flaubert",descripcion:"La historia de una mujer insatisfecha que busca escapar de su vida aburrida a través de aventuras románticas y el consumismo."},{id:14,titulo:"El retrato de Dorian Gray",autor:"Oscar Wilde",descripcion:"Un joven bello y narcisista conserva su juventud mientras su retrato envejece y muestra las consecuencias de sus actos inmorales."},{id:15,titulo:"La metamorfosis",autor:"Franz Kafka",descripcion:"Un hombre se despierta transformado en un insecto gigante, enfrentando el aislamiento y el rechazo de su familia y la sociedad."},{id:16,titulo:"Anna Karenina",autor:"León Tolstói",descripcion:"Una trágica historia de amor y adulterio en la alta sociedad rusa del siglo XIX."},{id:17,titulo:"El señor de los anillos",autor:"J.R.R. Tolkien",descripcion:"Una épica de fantasía que sigue la lucha del bien contra el mal en la Tierra Media."},{id:18,titulo:"Cumbres borrascosas",autor:"Emily Brontë",descripcion:"Una oscura historia de amor y venganza en los páramos de Yorkshire."},{id:19,titulo:"La Divina Comedia",autor:"Dante Alighieri",descripcion:"Un poema épico que describe el viaje de Dante a través del Infierno, el Purgatorio y el Paraíso."},{id:20,titulo:"El guardián entre el centeno",autor:"J.D. Salinger",descripcion:"La historia de un joven rebelde que busca autenticidad y propósito en la Nueva York de los años 50."}],h={libros:b},y={class:"bg-gray-200 rounded-md p-4"},f={class:"flex justify-end mb-4"},_=a("h1",{class:"text-5xl font-semibold text-gray-700 mb-6"},"Listado de Libros",-1),x={class:"overflow-y-auto max-h-[80dvh] max-h-"},j={class:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"},L={class:"text-xl font-bold mb-2"},U={class:"text-gray-600 mb-2"},q=a("strong",null,"Autor:",-1),D={class:"text-gray-800"},G={__name:"ListadoLibrosView",setup(k){const d=h.libros;return(E,w)=>{const c=u("PieDePagina");return s(),o(n,null,[i(g),a("div",y,[a("div",f,[i(t(v),{to:"/home",class:"inline-block rounded bg-gray-700 text-xl p-2 text-white font-bold w-40 text-center hover:bg-gray-500 duration-200 ease-in"},{default:p(()=>[l(" Regresar al Home ")]),_:1})]),a("div",null,[_,a("div",x,[a("div",j,[(s(!0),o(n,null,m(t(d),e=>(s(),o("div",{key:e.id,class:"bg-white rounded-lg shadow-md p-4"},[a("h2",L,r(e.titulo),1),a("p",U,[q,l(" "+r(e.autor),1)]),a("p",D,r(e.descripcion),1)]))),128))])])])]),i(c)],64)}}};export{G as default};
