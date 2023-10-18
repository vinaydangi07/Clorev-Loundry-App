// JavaScript code for image uploading
// funtion for preview image
function getimg(event,id) {
    var uploadLabel = id+"UploadBtn";
    var ImgClose = id+"imgclose";
    var imgCloseBtn = document.getElementById(ImgClose);
    var showImageFeild = id+"img";
    var uploadLabelBtn = document.getElementById(uploadLabel);
    var image = URL.createObjectURL(event.target.files[0]);
    var imageTag = document.getElementById(showImageFeild);
    imageTag.src = image;
    uploadLabelBtn.style.display = "none";
    imageTag.style.display="block";
    imgCloseBtn.style.display="block";
  }
  // function for close image
  function closeImage(inputId,uploadBtnId,imgId,closeBtnId){
    var uploadLebel = document.getElementById(uploadBtnId);
    var closeBtn = document.getElementById(closeBtnId);
    var dpimg = document.getElementById(imgId);
    document.getElementById(inputId).value = null;
    closeBtn.style.display = "none";
    dpimg.style.display = "none";
    uploadLebel.style.display = "block";
  }

function submitVendorFormData(){
  // const checkAnimation = document.getElementById('formCheck')
  // const vendorForm = document.getElementById('vendorForm')
  // checkAnimation.style.display = 'block'
  // vendorForm.style.filter = '3px'
}



