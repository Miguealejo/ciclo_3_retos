// ROOM
//GET

function getDatosRoom() {
    $.ajax({
        url: "https://g3c015eb4c52f78-room.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/room/room",
        type: "GET", //tipo de accion
        datatype: "JSON",
        success: function (respuesta) {
        console.log(respuesta);
        pintarRespuestaRoom(respuesta.items);
        },
    });
}

function pintarRespuestaRoom(items) {
    let myTable = "<table>"; //let es un tipo variable y crear tabla
    for (i = 0; i < items.length; i++) {
        myTable += "<tr>"; //crear fila
        myTable += "<td>" + items[i].id + "</td>"; // tabla room
        myTable += "<td>" + items[i].room + "</td>";
        myTable += "<td>" + items[i].stars + "</td>";
        myTable += "<td>" + items[i].category_id + "</td>";
        myTable += "<td>" + items[i].description + "</td>";
        myTable +=
        "<td> <button onclick='borrarRoom(" + items[i].id + ")'>Borrar</button>";
        myTable +=
        "<td><button onclick='obtenerItemEspecificoroom(" +
        items[i].id +
        ")'>Cargar</button></td>";
      myTable += "</tr>"; //cerrar fila
    }
    myTable += "</table>"; //cerrar tabla
    $("#resultadoRoom").append(myTable);
}

function guardarRoom() {
    let myData = {
        id: $("#id").val(),
        room: $("#room").val(),
        stars: $("#stars").val(),
        category_id: $("#category_id").val(),
        description: $("#description").val(),
    };
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: "https://g3c015eb4c52f78-room.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/room/room",
        type: "POST",
        data: myData,
        datatype: "JSON",
    success: function (respuesta) {
        $("#resultadoRoom").empty();
        $("#id").val("");
        $("#room").val("");
        $("#stars").val("");
        $("#category_id").val("");
        $("#description").val("");
        getDatosRoom();
        alert("se ha guardado el dato");
        },
    });
}

  //PUT

function editarRoom() {
    let myData = {
        id: $("#id").val(),
        room: $("#room").val(),
        stars: $("#stars").val(),
        category_id: $("#category_id").val(),
        description: $("#description").val(),
    };
    console.log(myData);
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: "https://g3c015eb4c52f78-room.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/room/room",
        type: "PUT",
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function (respuesta) {
        $("#resultadoRoom").empty();
        $("#id").val("");
        $("#room").val("");
        $("#stars").val("");
        $("#category_id").val("");
        $("#description").val("");
        getDatosRoom();
        alert("se ha actualizado");
        },
    });
}

  //DELETE

function borrarRoom(idElemento) {
    let myData = {
        id: idElemento,
    };
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: "https://g3c015eb4c52f78-room.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/room/room",
        type: "DELETE",
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function (respuesta) {
        $("#resultadoRoom").empty();
        getDatosRoom();
        alert("Se ha Eliminado.");
        },
    });
}

function obtenerItemEspecificoroom(items) {
        console.log("---- obtenerItemEspecificoroom items:", items);
    $.ajax({
        dataType: "json",
        url: "https://g3c015eb4c52f78-room.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/room/room/" + items,
        type: "GET",
        success: function (response) {
        console.log("---- obtenerItemEspecificoroom", response);
        var item = response.items[0];
        $("#id").val(item.id);
        $("#room").val(item.room);
        $("#stars").val(item.stars);
        $("#category_id").val(item.category_id);
        $("#description").val(item.description);
        },

        error: function (jqXHR, textStatus, errorThrown) {},
    });
}


// CLIENTE----------------------------------------------------------------------------------------------------

 //GET

 function getDatosClient() {
    $.ajax({
        url: "https://g3c015eb4c52f78-room.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/client/client",
        type: "GET", //tipo de accion
        datatype: "JSON",
        success: function (respuesta) {
        console.log(respuesta);
        pintarRespuestaClient(respuesta.items);
        },
    });
}

function pintarRespuestaClient(items) {
    let myTable = "<table>"; //let es un tipo variable y crear tabla
    for (i = 0; i < items.length; i++) {
        myTable += "<tr>"; //crear fila
        myTable += "<td>" + items[i].id + "</td>"; // tabla room
        myTable += "<td>" + items[i].name + "</td>";
        myTable += "<td>" + items[i].email + "</td>";
        myTable += "<td>" + items[i].age + "</td>";
        myTable +="<td> <button onclick='borrarClient(" + items[i].id + ")'>Borrar</button>";
        myTable +="<td><button onclick='obtenerItemEspecificoClient(" +items[i].id +")'>Cargar</button></td>";
        myTable += "</tr>"; //cerrar fila
    }
    myTable += "</table>"; //cerrar tabla
    $("#resultadoClient").append(myTable);
}

function guardarClient() {
    let myData = {
        id: $("#id_client").val(),
        name: $("#name").val(),
        email: $("#email").val(),
        age: $("#age").val(),
    };
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: "https://g3c015eb4c52f78-room.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/client/client",
        type: "POST",
        data: myData,
        datatype: "JSON",
        success: function (respuesta) {
        $("#resultadoClient").empty();
        $("#id").val("");
        $("#name").val("");
        $("#email").val("");
        $("#age").val("");
        getDatosClient();
        alert("se ha guardado el dato");
        },
    });
}

  //PUT

function editarClient() {
    let myData = {
        id: $("#id_client").val(),
        name: $("#name").val(),
        email: $("#email").val(),
        age: $("#age").val(),
    };
    console.log(myData);
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: "https://g3c015eb4c52f78-room.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/client/client",
        type: "PUT",
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function (respuesta) {
        $("#resultadoRoom").empty();
        $("#id_client").val("");
        $("#name").val("");
        $("#email").val("");
        $("#age").val("");
        
        alert("se ha actualizado");
        },
    });
}

  //DELETE

function borrarClient(idElemento) {
    let myData = {
        id: idElemento,
    };
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: "https://g3c015eb4c52f78-room.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/client/client",
        type: "DELETE",
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function (respuesta) {
        $("#resultadoClient").empty();
        getDatosClient();
        alert("Se ha Eliminado.");
        },
    });
}

function obtenerItemEspecificoClient(items) {
    console.log("---- obtenerItemEspecificoClient items:", items);
    $.ajax({
        dataType: "json",
        url: "https://g3c015eb4c52f78-room.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/client/client/" + items,
        type: "GET",
        success: function (response) {
        console.log("---- obtenerItemEspecificoclient", response);
        var item = response.items[0];
        $("#id_client").val(item.id);
        $("#name").val(item.name);
        $("#email").val(item.email);
        $("#age").val(item.age);
        },

        error: function (jqXHR, textStatus, errorThrown) {},
    });
}


// MESSAGE --------------------------------------------------------------------

 //GET

function getDatosMessage() {
    $.ajax({
        url: "https://g3c015eb4c52f78-room.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/message/message",
        type: "GET", //tipo de accion
        datatype: "JSON",
        success: function (respuesta) {
        console.log(respuesta);
        pintarRespuestaMessage(respuesta.items);
        },
    });
}

function pintarRespuestaMessage(items) {
    let myTable = "<table>"; //let es un tipo variable y crear tabla
    for (i = 0; i < items.length; i++) {
        myTable += "<tr>"; //crear fila
        myTable += "<td>" + items[i].id + "</td>"; // tabla room
        myTable += "<td>" + items[i].messagetext + "</td>";
        myTable +="<td> <button onclick='borrarMessage(" + items[i].id + ")'>Borrar</button>";
        myTable +="<td><button onclick='obtenerItemEspecificoMessage(" +items[i].id +")'>Cargar</button></td>";
        myTable += "</tr>"; //cerrar fila
    }
    myTable += "</table>"; //cerrar tabla
    $("#resultadoMessage").append(myTable);
}

function guardarMessage() {
    let myData = {
        id: $("#id_message").val(),
        messagetext: $("#messagetext").val(),
    };
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: "https://g3c015eb4c52f78-room.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/message/message",
        type: "POST",
        data: myData,
        datatype: "JSON",
        success: function (respuesta) {
        $("#resultadoMessage").empty();
        $("#id_message").val("");
        $("#messagetext").val("");
        getDatosMessage();
        alert("se ha guardado el dato");
        },
    });
}

  //PUT

function editarMessage() {
    let myData = {
        id: $("#id_message").val(),
        messagetext: $("#messagetext").val(),
    };
    console.log(myData);
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: "https://g3c015eb4c52f78-room.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/message/message",
        type: "PUT",
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function (respuesta) {
        $("#resultadoMessage").empty();
        $("#id_message").val("");
        $("#messagetext").val("");
        
        
        alert("se ha actualizado");
        },
    });
}

  //DELETE

function borrarMessage(idElemento) {
    let myData = {
        id: idElemento,
    };
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: "https://g3c015eb4c52f78-room.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/message/message",
        type: "DELETE",
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function (respuesta) {
        $("#resultadoMessage").empty();
        getDatosMessage();
        alert("Se ha Eliminado.");
        },
    });
}

function obtenerItemEspecificoMessage(items) {
    console.log("---- obtenerItemEspecificoMessage items:", items);
    $.ajax({
        dataType: "json",
        url: "https://g3c015eb4c52f78-room.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/message/message/" + items,
        type: "GET",
        success: function (response) {
        console.log("---- obtenerItemEspecificoMessage", response);
        var item = response.items[0];
        $("#id_message").val(item.id);
        $("#messagetext").val(item.messagetext);
        },

        error: function (jqXHR, textStatus, errorThrown) {},
    });
}
