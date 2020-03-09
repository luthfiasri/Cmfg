const portal = $('#data').data('id');


$(document).ready(function () {
    console.log(portal);
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
        type: 'GET',
        dataType: 'json',
        success: function (result) {
            for (var i = 0; i < result.length; i++) {
                $("#kabupaten").append('<option value="' + result[i].id_kab + '">' + result[i].nama + '</option>');

            }

        }
    });

});
$("#kabupaten").change(function () {
    var id_kab = $("#kabupaten").val();
    $("#kecamatan").html('');
    $("#kelurahan").html('');
    $("#kecamatan").append('<option value="">Pilih</option>');
    $("#kelurahan").append('<option value="">Pilih</option>');
    var url = portal + '/kecamatan/' + id_kab;

    $.ajax({
        url: url,
        type: 'GET',
        dataType: 'json',
        success: function (result) {
            for (var i = 0; i < result.length; i++)
                $("#kecamatan").append('<option value="' + result[i].id_kec + '">' + result[i].nama + '</option>');
        }
    });
});
$("#kecamatan").change(function () {
    var id_kec = $("#kecamatan").val();
    $("#kelurahan").html('');
    $("#kelurahan").append('<option value="">Pilih</option>');
    var url = portal + '/kelurahan/' + id_kec;
    console.log(url);
    $.ajax({
        url: url,
        type: 'GET',
        dataType: 'json',
        success: function (result) {
            for (var i = 0; i < result.length; i++) {
                $("#kelurahan").append('<option value="' + result[i].id_kel + '">' + result[i].nama + '</option>');
            }
        }
    });
});