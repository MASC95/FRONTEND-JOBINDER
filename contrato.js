const contratoInterface__Post={
      title: String,
      content: String,
      urlImagePost: String,
      urlImageUser: String,
      nameUser: String,
      createdDate: String,
      likes: Number
}

const baseUrl = 'https://desafiojsequipo1-default-rtdb.firebaseio.com/';

const primerPost={
  title:'Primer Post',
  content:'Estamos haciendo nuestro primer post',
  urlImagePost: 'https://expertphotography.b-cdn.net/wp-content/uploads/2022/03/Background-Changer-App-Editing.jpg',
  urlImageUser: 'https://images.ctfassets.net/lh3zuq09vnm2/yBDals8aU8RWtb0xLnPkI/19b391bda8f43e16e64d40b55561e5cd/How_tracking_user_behavior_on_your_website_can_improve_customer_experience.png',
  nameUser: 'primerUser'
}

console.log('Hola desde el contrato:..');
//fetch(`${baseUrl}.json`,{method: 'POST',body:JSON.stringify(primerPost)});
