const URL_POST = 'https://desafiojsequipo1-default-rtdb.firebaseio.com/.json';

const primerPost = { 
    title: 'String',
    content: 'String',
    urlImagePost: 'String',
    urlImageUser: 'String',
    nameUser: 'String',
    likes: 0,
    createDate: ''
} 

console.log ("Hola desde article-1.js");
const postArticle = async ( ) => {
    try{
         const response = await fetch (URL_POST, {
            method: 'POST',
            headers: {"Content-type": "application/json; charset=UTF-8"},
            body: JSON.stringify (primerPost),

            });
        const result = await response.json ();
        return result;  
    }catch (error){
        console.log (error);
        return error;
    }
}

const pruebaPost = await postArticle ();
console.log (pruebaPost);