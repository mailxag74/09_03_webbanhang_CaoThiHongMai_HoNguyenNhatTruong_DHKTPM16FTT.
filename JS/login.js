(function ($) {
    "use strict";

    /*==================================================================
    [ Focus input ]*/
    $('.input100').each(function(){
        $(this).on('blur', function(){
            if($(this).val().trim() != "") {
                $(this).addClass('has-val');
            }
            else {
                $(this).removeClass('has-val');
            }
        })    
    })

})(jQuery);
function KiemTraTK()
    {
        var regexDK = /^[A-Za-z0-9_]{6,32}$/
        // var regexDK = /^[a-z]\*w/;
        var DK = document.getElementById('TxtDk').value;
        if(regexDK.test(DK)==false)
        {
            SDangNhap.innerText=" 6-32 kí tự";
            
        }
        else
        {
            SDangNhap.innerText="*";
            
        }
    }
    function KiemTraMK()
    {
        var regexMK =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])(?=.*[\*\$\!\@\#\&\^\(\) \?\_\-]).{8,}$/
        var MK = document.getElementById('TxtMk').value;
        if(regexMK.test(MK))
        {
            SMatKhau.innerText="*"
        }
        else
        {
            SMatKhau.innerText="Mật khẩu gồm 8 kí tự, hoa thường số kí tự đặc biệt"
        }
    }

    function KiemTraNhapLai()
    {
        var MK = document.getElementById('TxtMk').value
        var RMK = document.getElementById('TxtRMk').value;
        if(MK===RMK)
        {
            SNhapLai.innerText="*"
        }
        else
        {
            SNhapLai.innerText="Mật khẩu nhập lại không khớp"
        }
    }
    function KiemTraHoTen()
    {
        var regexHoTen = /^(([A-Z]+[a-z]+)+(\s))+([A-Z]+[a-z]+)$/
        var HoTen = document.getElementById('txtHoTen').value;
        if(regexHoTen.test(HoTen))
        {
            SHoTen.innerText="*"
        }
        else
        {
            SHoTen.innerText="Ten Khong Dung Dinh Dang"
        }
    }
    function KiemTraSDT()
    {
        var regexSDT=/^([09|03|84|85]+\d{9,10})$/
        var sdt = document.getElementById('txtPhone').value
        if(regexSDT.test(sdt))
        {
            Ssdt.innerText="*"
        }
        else
        {
            Ssdt.innerText="9-10 số (09,03,84,85)"
        }
    }
    function KiemTraSDT()
    {
        var regexSDT=/^([09|03|84|85]+\d{9,10})$/
        var sdt = document.getElementById('txtPhone').value
        if(regexSDT.test(sdt))
        {
            Ssdt.innerText="*"
        }
        else
        {
            Ssdt.innerText="9-10 số (09,03,84,85)"
        }
    }

