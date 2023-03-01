import { GET_DATA, EDIT_ITEM } from "./Edit_DelatePostMS.js"
console.log("hola 1");

const UserImage = document.querySelector('#UserImage'); //ya
const content = document.querySelector('#content'); //ya
const Img_Post = document.querySelector('#Img_Post'); //ya
const titlePost = document.querySelector('#titlePost'); //yA  
const publicar = document.querySelector('#save'); 


/*GET_DATA(Img_Post,UserImage,WritePost,NewPost); */
const mySearch = window.location.search;
const tempobj = new URLSearchParams(mySearch);
const targetID = tempobj.get('id');
console.log('targetID:',targetID);



const id_post = targetID;
const get_Data = await GET_DATA(id_post);  
console.log("get data console", get_Data); 
titlePost.value = get_Data.title;
content.value = get_Data.content;
Img_Post.value = get_Data.urlImagePost;
UserImage.value = get_Data.urlImageUser;

publicar.addEventListener("click", async (event) => {
  event.preventDefault();
  console.log("publicando cambios");
  const objeto_datos = juntando_datos();
  const edit = await EDIT_ITEM (objeto_datos, id_post);
  console.log("resultado de la edición",edit);
  

})

const juntando_datos = () => {
  const objeto_datos = {
    ...get_Data ,
    title: titlePost.value,
    content: content.value,
    urlImagePost: Img_Post.value,
    urlImageUser: UserImage.value,
  }
  return objeto_datos
}


/*let Object = {
  UserImage: get_Data.urlImagePost,
  WritePost:,
  Img_Post: ,
  Publicar: ,
} 
*/

/*title: String,  title post  newpost  //yq
content: String,  = writePost //
urlImagePost: String, //ya
urlImageUser: String, // ya
nameUser: String, 
createdDate: String, x
likes: Number x


//const createPostButon = document.querySelector('#viewCreatePost');
get
Publicar.addEventListener('click',(event) => {
 

  EDIT_ITEM(Object);  
 
  console.log(Object)
 
}); */