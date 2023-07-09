var users={}
var notes=[] // array of key value pairs
var userlist=[]
var userno=0

function saveNote(){
    let topic=document.querySelector("#NoteName").value
    notes[userno][topic]=document.querySelector("#TextBox").value
    document.querySelector("#SaveStatus").innerHTML="Sucessfully Saved"
}
function readNote(){
    let name =  document.querySelector("#NoteName").value

    if (name in notes[userno]){
        document.querySelector("#TextBox").innerHTML=notes[userno][name]
        document.querySelector("#ReadStatus").innerHTML="Sucessfully Read"

    }else{

        document.querySelector("#ReadStatus").innerHTML="No such note"
    }

}

function setRead(){
    var read =  document.querySelector("#ReadChunk")
    if (typeof(read) != 'undefined' && read != null)
    {
        read.remove()
    }
    var write =  document.querySelector("#WriteChunk")
    if (typeof(write) != 'undefined' && write != null)
    {
        write.remove()
    }

    let elem = document.createElement('div')
    elem.id="ReadChunk"
    elem.innerHTML='<h1>Available notes</h1>'

    let keys=Object.keys(notes[userno])
    if (keys.length!=0){
        elem.innerHTML+='<ul>'
        for (i=0;i<keys.length;i++){
            elem.innerHTML+=('<li>'+keys[i]+'</li>')

        }
        elem.innerHTML+='</ul>'
    }else{
        elem.innerHTML+='<p>No saved notes</p><br>'
    }
    elem.innerHTML+='<h3>Note Name</h3>'
    elem.innerHTML+='<input type="text" id="NoteName" name="NoteName">'
    elem.innerHTML+='<br><button id="Save" type="button" onclick="readNote()">Read</button>'
    elem.innerHTML+='<br><br><br><b><h3>Text</h3><p id="TextBox">...</p></b><br><br>'
    elem.innerHTML+='<p id="ReadStatus">...</p>'
    document.body.appendChild(elem)



}
function setWrite(){
    var write =  document.querySelector("#WriteChunk")
    if (typeof(write) != 'undefined' && write != null)
    {
        write.remove()
    }
    var read =  document.querySelector("#ReadChunk")
    if (typeof(read) != 'undefined' && read != null)
    {
        read.remove()
    }

    let elem = document.createElement('div')
    elem.id="WriteChunk"
    elem.innerHTML='<h1>Enter your note</h1><br><h3>Note Name</h3>'
    elem.innerHTML+='<input type="text" id="NoteName" name="NoteName">'
    elem.innerHTML+='<br><br><br><textarea name="Write" id="TextBox" cols="50" rows="10"></textarea>'
    elem.innerHTML+='<br><button id="Save" type="button" onclick="saveNote()">Save</button>'
    elem.innerHTML+='<p id="SaveStatus">...</p>'
    document.body.appendChild(elem)







}

function logOut(){
    var write =  document.querySelector("#WriteChunk")
    if (typeof(write) != 'undefined' && write != null)
    {
        write.remove()
    }
    var read =  document.querySelector("#ReadChunk")
    if (typeof(read) != 'undefined' && read != null)
    {
        read.remove()
    }

    var control =  document.querySelector("#ControlChunk")
    if (typeof(control) != 'undefined' && control != null)
    {
        control.remove()
    }

    let elem = document.createElement('div')
    elem.id="login"
    elem.innerHTML='<h1>Cloud Based Productivity App</h1><br><h3>Enter your details</h3><p>Username</p>'
    elem.innerHTML+='<input type="text" id="Username" name="Username"><p>Password</p>'
    elem.innerHTML+='<input type="text" id="Password" name="Password"><br><br>'
    elem.innerHTML+='<button id="Login" type="button" onclick="login()">Login</button>'
    elem.innerHTML+='<button id="Signup" type="button" onclick="signup()">Signup</button><br><br>'
    elem.innerHTML+='<p id="LoginStatus">...</p>'
    document.body.appendChild(elem)




}


function data_screen(){
    let elem = document.createElement('div')
    elem.id="ControlChunk"
    elem.innerHTML='<button id="LogOut" type="button" onclick="logOut()">Log Out</button><br>'
    elem.innerHTML+='<h3 id="choice">Choose your mode</h3>'
    elem.innerHTML+='<button id="ReadButton" type="button" onclick="setRead()">Read Notes</button>'
    elem.innerHTML+='<button id="WriteButton" type="button" onclick="setWrite()">Write Notes</button><br>'

    document.body.appendChild(elem)
    setRead()

}

function login(){
    let username=document.querySelector('#Username').value
    let password=document.querySelector('#Password').value


    if ((username in users) && (password==users[username])){
        document.querySelector("#LoginStatus").innerHTML="Successfully Logged in"
        document.querySelector("#login").remove()
        for (i=0;i<userlist.length;i++){
            if (userlist[i]==username){
                userno=i

            }

        }
        data_screen()

    }else{

        document.querySelector("#LoginStatus").innerHTML="Invalid User"
    }



}

function signup(){
    let username=document.querySelector('#Username').value
    let password=document.querySelector('#Password').value
    if (username.length!=0){
        users[username]=password
        document.querySelector("#LoginStatus").innerHTML="User successfully created"
        userlist.push(username)
        notes.push({})
    }else{
        document.querySelector("#LoginStatus").innerHTML="Please enter a valid username"
    }

}



