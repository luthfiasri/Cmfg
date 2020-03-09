const portal = $('#data').data('id');


$(document).ready(function () {
    $("#provinsi").append('<option value="">Pilih</option>');
    $("#kabupaten").html('');
    $("#kecamatan").html('');
    $("#kelurahan").html('');
    $("#kabupaten").append('<option value="">Pilih</option>');
    $("#kecamatan").append('<option value="">Pilih</option>');
    $("#kelurahan").append('<option value="">Pilih</option>');
    url = portal + '/provinsi';
    $.ajax({
        url: url,
        type: 'POST',
        dataType: 'json',
        success: function (result) {
            for (var i = 0; i < result.length; i++) {
                $("#provinsi").append('<option value="' + result[i].id_prov + '">' + result[i].nama + '</option>');

            }
        }

    });

});
$("#provinsi").change(function () {

    var id_prov = $("#provinsi").val();

    $("#kabupaten").html('');
    $("#kecamatan").html('');
    $("#kelurahan").html('');
    $("#kabupaten").append('<option value="">Pilih</option>');
    $("#kecamatan").append('<option value="">Pilih</option>');
    $("#kelurahan").append('<option value="">Pilih</option>');
    var url = portal + '/kabupaten/' + id_prov;

    $.ajax({
        url: url,
        type: 'POST',
        dataType: 'json',
        success: function (result) {
            for (var i = 0; i < result.length; i++) {
                $("#kabupaten").append('<option value="' + result[i].id_kab + '">' + result[i].nama + '</option>');

            }

        }
    });

});