import React,{useEffect, useState,useRef} from 'react'
import { BsDownload } from 'react-icons/bs';
import { MdNavigateBefore } from 'react-icons/md';
import { MdNavigateNext } from 'react-icons/md';
import { HiXMark } from 'react-icons/hi2';
import { HiOutlineFolderArrowDown } from 'react-icons/hi2';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './main_page.css'
import { useNavigate } from "react-router-dom"
import { Amplify, Auth, Storage } from 'aws-amplify';



import Popup from './popup/popup';



function main_page() {
 const ref = useRef(null)
  const navigate = useNavigate() 
 const [num, setnum] = useState(0)
 const [arr_on, setarr_on] = useState(false)
 const [no_img, setno_img] = useState(true)
const [pop, setpop] = useState(true)
const [files, setFiles] = useState([]);

let filezzz = []


// useEffect(() => {
//   Amplify.configure({
//     Auth: {
//       identityPoolId: "ap-south-1:5a56050d-f498-4e14-a4a4-ab9b499d6b14",
//       region: "ap-south-1",
//       AccesskeyId :"AKIAZQDLQNNHO7FT5U4Y",
//       SecretAccessKey : "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",
//     },


//     Storage: {
//       AWSS3: {
//         bucket: "ertc-test",
//         region: "ap-south-1",
//       },
//     },
//   });
// }, []);


useEffect(() => {
  
  Amplify.configure({
    Auth: {
        identityPoolId: 'ap-south-1:ce88d2ae-7b90-4fe7-86c3-207e7300cc71', //REQUIRED - Amazon Cognito Identity Pool ID
        region: 'ap-south-1', // REQUIRED - Amazon Cognito Region
        // userPoolId: 'XX-XXXX-X_abcd1234', //OPTIONAL - Amazon Cognito User Pool ID
        // userPoolWebClientId: 'XX-XXXX-X_abcd1234', //OPTIONAL - Amazon Cognito Web Client ID
    },
    Storage: {
        AWSS3: {
            bucket: 'bucketsiefq1', //REQUIRED -  Amazon S3 bucket name
            region: 'ap-south-1', //OPTIONAL -  Amazon service region
        }
    }
  });
 
}, [])


const upload_pic = ()=>{
  document.querySelector('.drop_box').addEventListener("click",(e)=>{
    document.querySelector("#choose-file").click()
  })
}
const upload_pic2 = ()=>{
  document.querySelector('.drop_box2').addEventListener("click",(e)=>{
    document.querySelector("#choose-file2").click()
  })
}



function onFileSelected(e) {
  
  var selectedFile = document.getElementById("choose-file").files;
 
    const arr_nom = Array.from(selectedFile)
  for (let i = 0; i < arr_nom.length ; i++) {
  
    var selectedFile = document.getElementById("choose-file").files[i];
    var reader = new FileReader();

    const img = document.createElement("img")
    img.classList.add('img_continer')

    var imgtag = document.querySelector(".imgo");
   //  imgtag.title = selectedFile.name;
  
    reader.onload = function(event) {
      img.src = event.target.result;
    };
 
    
    reader.readAsDataURL(selectedFile)
    
    const img_cont = document.createElement("div")
    const button_close = document.createElement("div")

    img_cont.appendChild(img)
    img_cont.className = "img_cont"

    button_close.innerHTML = `<svg stroke="white" fill="white" stroke-width="0" viewBox="0 0 24 24" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clip-rule="evenodd"></path></svg>`
    
    // button_close.textContent = "aah close me"

    button_close.className = "button_close"

    img_cont.appendChild(button_close)



    document.querySelector(".img_border").appendChild(img_cont)
   
  }
  Array.from(document.querySelector(".img_border").children).forEach((ele)=>{

    console.log(ele);

  })
   setarr_on(true)
   setno_img(false)
  
}



function onFileSelected2(e) {
  
  var selectedFile = document.getElementById("choose-file2").files;
 
    const arr_nom = Array.from(selectedFile)
  for (let i = 0; i < arr_nom.length ; i++) {
  
    var selectedFile = document.getElementById("choose-file2").files[i];
    var reader = new FileReader();

    const img = document.createElement("img")
    img.classList.add('img_continer')

    var imgtag = document.querySelector(".imgo");
   //  imgtag.title = selectedFile.name;
  
   reader.onload = function(event) {
    img.src = event.target.result;
  };

  
  reader.readAsDataURL(selectedFile)
  
  const img_cont = document.createElement("div")
  const button_close = document.createElement("div")

  img_cont.appendChild(img)
  img_cont.className = "img_cont"

  button_close.innerHTML = `<svg stroke="white" fill="white" stroke-width="0" viewBox="0 0 24 24" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clip-rule="evenodd"></path></svg>`
  
  // button_close.textContent = "aah close me"

  button_close.className = "button_close"

  img_cont.appendChild(button_close)



  document.querySelector(".img_border").appendChild(img_cont)
 
}
Array.from(document.querySelector(".img_border").children).forEach((ele)=>{

  console.log(ele);

})
 setarr_on(true)
 setno_img(false)
}

const next_arr =()=>{

  document.querySelectorAll(".img_continer").forEach(e=> {
    document.querySelector(".img_border").scrollTo({
      top:0,
      left:document.querySelector(".img_border").scrollLeft + e.offsetWidth ,
      behavior:"smooth"
    })

  });
 
}

const back_arr =()=>{

  document.querySelectorAll(".img_continer").forEach(e=> {
    document.querySelector(".img_border").scrollTo({
      top:0,
      left:document.querySelector(".img_border").scrollLeft - e.offsetWidth ,
      behavior:"smooth"
    })

  });
  
}

const folder = (e)=>{
  document.getElementById("folder")
  var output = document.querySelector("ul");
  var files = e.target.files;

  for (var i=0; i<files.length; i++) {
    var item = document.createElement("li");
    item.innerHTML = files[i].webkitRelativePath;
    output.appendChild(item);
  };
}

setInterval(() => {

  document.querySelectorAll(".img_cont").forEach(e => {
    e.children[1].addEventListener('click',(ele)=>{
      e.remove() 
    })
  
  });


}, 1000);


setInterval(() => {
  document.querySelectorAll(".button_close").forEach(e => {
    
    e.addEventListener('click',(el)=>{
      // console.log(el.target);
      el.target.remove()
    })
    
   
  })
}, 1000);


const handleFileLoad = () => {
  const file_len = Array.from(ref.current.files).length
  for (let i = 0; i < file_len; i++) {
  
    const filename = ref.current.files[i].name;
    console.log(ref.current.files[i]);
    Storage.put(filename, ref.current.files[i], {
      
    })
      .then(resp => {
       
        
          navigate("/Home")
        
    }).catch(err => {console.log(err);});
  }
}
const handleFileLoad2 = () => {
  const choose_file2 = document.getElementById("choose-file2")
  const file_len = Array.from(choose_file2.files).length
  for (let i = 0; i < file_len; i++) {
  
    const filename = choose_file2.files[i].name;
    console.log(choose_file2.files[i]);
    Storage.put(filename, choose_file2.files[i], {
      
    })
      .then(resp => {
       
          navigate("/Home")
        

    }).catch(err => {console.log(err);});
  }
}


  return (
    <>
    

    <div style={{height:"100%",paddingBottom:"30px"}}>
    


      <div style={{display:"flex",justifyContent:'center',width:"93%",margin:"0 auto"}}>
        <div className='drop_box' onClick={()=>{upload_pic()}}>
              <div ><BsDownload size={20}/></div>
              <div>Upload your image</div>
              <input ref={ref} type="file" style={{zIndex: "20" ,color: 'transparent',visibility: 'hidden',height:"1px"}} accept="image/*" id="choose-file" multiple  onChange={(e)=>{onFileSelected(e)}}/>
        </div>

        <div className='drop_box2 ' onClick={()=>{upload_pic2()}}>
              <div ><HiOutlineFolderArrowDown size={20}/></div>
              <div>Upload your folder</div>
              <input  type="file" style={{zIndex: "20" ,color: 'transparent',visibility: 'hidden',height:"1px"}} accept="image/*" id="choose-file2" multiple directory="" webkitdirectory=""  onChange={(e)=>{onFileSelected2(e)}}/>
        </div>
      </div>

      <div className='banner' style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"10px",width:"90%",margin:"0 auto"}}>
       {/* {arr_on&& 
         <div onClick={()=>{back_arr() }} className="arr_class" ><MdNavigateBefore size={22}/></div>
} */}

    <div style={{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"100%",flexDirection:"column"}}>
        {no_img&&
            <h1 className='mid_title'>There is no image to show</h1>      
    }
 
    <div className='img_border'></div>

    </div>

    


      {/* {arr_on&&
        <div onClick={()=>{next_arr()}} className="arr_class" ><MdNavigateNext size={22}/></div>
        } */}
      </div>
      {!no_img&&
        <div style={{display:"flex",justifyContent:"center"}}>
          {/* <button onClick={()=>{handleFileLoad()}}>upload</button> */}
           <button className='proceed_btn_upload' onClick={()=>{handleFileLoad();handleFileLoad2()}}> Proceed</button>
        </div>
      }
      {/* <input type="file" id="folder" onChange={(e)=>{folder(e)}}   directory="" webkitdirectory="" multiple/> */}
    </div>
    </>
  )
}

export default main_page