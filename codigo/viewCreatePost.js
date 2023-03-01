console.log('Hola desde viewCreatePost:..');
console.log('segun ya trabaja...');

const today = new Date();
//today.setHours(today.getHours()-6);
//console.log('today:..',today);
//-NMktvJUSLuNEaZtywBC
let objPost = {
  title: '',
  content: '',
  urlImagePost: '',
  urlImageUser: '',
  nameUser: '',
  createdDate: today,
  likes: 0
}

const createPostButon = document.querySelector('#viewCreatePost');

if(createPostButon){
  createPostButon.addEventListener('click',(e)=>{
    e.preventDefault();
    //console.log('nos vamos a viewCreatePost:..');
    window.location.assign('../src/viewCreatePost.html');
  })
}

const fullObjPost= () =>{
    const nameUser =  document.querySelector('#nameUser');
    const title = document.querySelector('#title');
    const content = document.querySelector('#content');
    const urlImagePost = document.querySelector('#urlImagePost');
    const urlImageUser = document.querySelector('#urlImageUser');
    objPost = {
      ...objPost,
      nameUser: nameUser.value,
      title: title.value,
      content: content.value,
      urlImagePost: urlImagePost.value,
      urlImageUser: urlImageUser.value
    }
}

const publishButton = document.querySelector('#publishButon');

if (publishButton){
  publishButton.addEventListener('click', async(e)=>{
    e.preventDefault();
    fullObjPost();
    console.log('objPost:..',objPost);
    const result = await postObjPost(objPost);
    window.location.href = '../index.html';
  })
}

const baseUrl = 'https://desafiojsequipo1-default-rtdb.firebaseio.com/';

const postObjPost = async (data)=>{
  const options = {
    method: 'POST',
    body: JSON.stringify(data)
  }
  try {
    const response = await fetch(`${baseUrl}.json`,options);
    const result = await response.json();
    console.log(result);
    return result
  } catch (error) {
    console.log(error);
    return error
  }
}

const editPost = document.querySelector('#editPost');



const titlePost = document.querySelector('#titlePost');




const getAllPosts = async ()=>{
  try {
    const response = await fetch(`${baseUrl}.json`);
    const result= await response.json();
    console.log('data en DB:',result);
    return result
  } catch (error) {
    console.log('error:',error);
    return error
  }
}

const allPosts= await getAllPosts();

const parseInfo = (info) => {
  const list = Object.entries(info);
  const newList = list.map((elemento) => {
      const infoParsed = {
          id: elemento[0],
          ...elemento[1],
      }
      return infoParsed
  })
  return newList;
}

const info= parseInfo(allPosts);
console.log(info[info.length-1]);
const lastPost = info[info.length-1];


const imgPrincipal= document.querySelector('#imgPrincipal');
imgPrincipal.src= lastPost.urlImagePost;

const userName= document.querySelector('#userName');
userName.textContent= lastPost.nameUser;

titlePost.textContent = lastPost.title;

const imgUser = document.querySelector('#imgUser');
imgUser.src = lastPost.urlImageUser;

if (titlePost){
  titlePost.addEventListener('click',(e)=>{
    e.preventDefault();

    console.log('Vamos a la pag de Julio');
    window.location.href= `../src/articleJulio.html?id=${lastPost.id}`;
  })
}

if (editPost) {
  editPost.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log('nos vamos a la pag de Miguel');
    window.location.href= `../codigo/newhtmlMs.html?id=${lastPost.id}`;
  })
}

const deletePost = document.querySelector('#deletePost');

if (deletePost){
  deletePost.addEventListener('click', async(e)=>{
    e.preventDefault();
    console.log('Eliminando Post...');
    await deleteMyPost(lastPost.id);
    window.location.reload();
  })
}


const deleteMyPost = async(id)=>{
  try {
    const response = await fetch(`${baseUrl}${id}.json`,{ method: 'DELETE'});
    const result = await response.json();
    console.log('post eliminado:',result);
    return result
  } catch (error) {
    console.log(error);
    return error
  }
}
