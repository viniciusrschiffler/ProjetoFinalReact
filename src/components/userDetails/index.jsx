import{
    Container,
    Name,
    Username,
    Description
} from './styles';

/*function retornarDadosGit() {
    fetch("https://api.github.com/users/anaclarabull")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            var informacaoDesejadaNome = Name;
            var informacaoDesejadaBio = Description;
            var informacaoDesejadaFotoPerfil = data.avatar_url;
            console.log(informacaoDesejadaFotoPerfil);

            var nome = document.getElementById("nome");
            nome.innerHTML = informacaoDesejadaNome;

            var bio = document.getElementById("bio")
            bio.innerHTML = informacaoDesejadaBio;

            var foto = document.getElementsByClassName("foto");
            var img = document.createElement('img');
            img.src = informacaoDesejadaFotoPerfil;


            document.getElementById("foto").appendChild(img)
        }); 
}

retornarDadosGit()*/

const UserDetails = props =>(
    <Container>
        <Name>{props.name}</Name>
        <Username>{props.login}</Username>
        <Description>{props?.bio}</Description>
    </Container>

);

export default UserDetails;