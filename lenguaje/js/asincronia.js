/* las asincronas se ejecutan pero no se sabe cuando se ba a tener la respuesta hay que esperarla y mientras le devuelve el control al hilo principal despues de una peticion a una API o a una base de dato */

// temporizadores

setTimeout(() => {
    //console.log("se ejecuta solo una ves");
}, 3000); // se ejecutara a los tres segundos


// se guarda en una variable para poder parar el temporizador
let temporizador = setInterval(() => {

    console.log(new Date().toLocaleTimeString());
}, 1000);

clearInterval(temporizador);

//los setTimeout me simulan por ejemplo la consulta a una API
// todos los setTimeout se pasan a la pila de tareas(call stack) y no se ejecutan hasta despues de las operaciones sincronas esto se hace para no bloquear el hilo principal 


//callback

function requesHandler(req, res) {
    
    User.findById(req.userId, function (err, user) { // 1
        if(err){
            res.send(err);
        } 
        else{
            Tasks.findById(user.tasksId, function (err, tasks) { // 2
                if(err){
                    return res.send(err);
                }
                else{
                    tasks.completed = true;
                    tasks.save(function (err) { // 3
                        if(err){
                            return res.send(err);
                        }
                        else{
                            res.send("Task Completed");
                        }
                    })
                }
            })
        }
    })
    console.log("hola");
    // se ejecutara primero el hola aunque este despues de la llamada del callback, ya que es una instruccion sincrona

} // callback hell 

// 1. voy a buscar a un usuario por id

// 2. quiero saber que tareas realiza este usuario y le doy true a una propiedad de las tareas.

// 3. una ves que tengo las tareas que realiza el usuario, quiero actualizar un valor en la base de dato, este tambien es un proceso de la base de datos por lo que tardaria un tiermpo por eso tambien necesitamos una callback que maneje la respuesta que da el servidor.

// cada consulta a una base de datos toma un tiempo respuesta, la respues del servidor la manejo con el callback, esta respuesta puede ser lo que le pido o un error
// LAS INSTRUCCIONES QUE DEPENDEN DE LA RESPUESTA DEL SERVIDOR DEBEN DE IR DENTRO DEL CALLBACK

/* es decir, lo que genera el callback hell es que dentro de la funcion callback voy a tener las instrucciones que se van a ejecutar cuando obtenga los datos del servidor, estas instrucciones pueden ser mas peticiones o actualizar datos en el servidor */



// promesas

/* las promesas se utiliza para resolver el problema de manejar errores en el callback hell ya que ya que esta debe manejar el error en cada callback */

function requesHandler(req, res) {
    
    User.findById(req.userId)
        .then(user => {
            return Tasks.findById(user.Tasksid);
        })
        .then(tasks => {
            tasks.completed = true;
            return tasks.save();
        })
        .then(() => {
            res.send("Task Completed");
        })
        .catch(err => {
            res.send(err);
        })
}

// maneja del mismo modo el error para todas las callbacks una sola ves
/* si solo tengo una funcion asincrona uso callback pero si tengo una concatenacion me conviene usar las promesas! para tener un codigo mas ordenado y en cualquier parte poder manejar el error  */



// async-await


async function requesHandler(req, res) {

    try{
        const user = await User.findById(req.userId)    
        const tasks = await Tasks.findById(user.Tasksid);
        tasks.completed = true;
        await tasks.save();
        res.send("Task Completed");
    }
    catch(err){
            res.send(err);

    }
}