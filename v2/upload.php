<?php
 

    if(isset($_FILES['upload']['name']))
    {
    $file = $_FILES['upload']['tmp_name'];
    $file_name = $_FILES['upload']['name'];
    $folder2  = "../../stream.id/public/assets/img/AboutUs/Faqs/";
    $folder  = "assets/img/AboutUs/Faqs/";
    $file_name_array = explode(".", $file_name);
    $extension = strtolower(end($file_name_array));
    $new_image_name = rand() . '.' . $extension;
    chmod('upload', 0777);
    $allowed_extension = array("jpg", "gif", "png",'jpeg');
    var_dump($file);
    if(in_array($extension, $allowed_extension))
    {
    move_uploaded_file($file, $folder. $new_image_name);
    copy($folder.$new_image_name, $folder2.$new_image_name);
    $function_number = $_GET['CKEditorFuncNum'];
    $url = 'http://localhost/Git/portal_stream.id/public/assets/img/AboutUs/Faqs/' . $new_image_name;
    $link = 'http://localhost/Git/portal_stream.id/public/assets/img/AboutUs/Faqs/' . $new_image_name;
    $message = '';
    echo "<script type='text/javascript'>window.parent.CKEDITOR.tools.callFunction($function_number, '$link', '$message');</script>";
    }
    }
    ?>