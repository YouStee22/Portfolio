var switchPgae;
document.getElementById("downloadCV").addEventListener("click", function() {

    var urlParams = new URLSearchParams(window.location.search);
    var lang = urlParams.get('lang');
  

    if (lang === "en") {
        var downloadLink = document.createElement("a");
        downloadLink.href = "CV/TomaszPioroANGCVKaluz.jpg";
        downloadLink.download = "TomaszPioroCV.jpg";
        document.body.appendChild(downloadLink);
        downloadLink.click();

        setTimeout(function() {
            document.body.removeChild(downloadLink);
        }, 100);
  
    }    
    if (lang === "pl") {
        var downloadLink = document.createElement("a");
        downloadLink.href = "CV/TomaszPioroPLCV.jpg";
        downloadLink.download = "TomaszPioroCV.jpg";
        document.body.appendChild(downloadLink);
        downloadLink.click();

        setTimeout(function() {
            document.body.removeChild(downloadLink);
        }, 100);
    }
});




function hireMe() {
    if (switchPgae) {
        goOutFromProjects();
    }

    let element = document.querySelector('.main-text');
    contactUpAni();

    setTimeout(function() {
        if (document.querySelector('.main-text') === null) {
            element = document.querySelector('.contact-me');
        }
        
        element.innerHTML = `<p translation-data="contact-header">Skontaktuj się ze mną!</p>
                            <p translation-data="Phone">Telefon: 787 636 096</p>
                            <p>E-mail: tomekpiorko2000@wp.pl</p>
                            <p>Instagram: _pi0rk0</p>`;

        element.classList.add('contact-me');
        element.classList.remove('main-text');

        contactCenterAni();

    loadLanguage();

    }, 400);

    activeButton(1);
    getBlobAni();
    
}
function start() {
    if (switchPgae) {
        goOutFromProjects();
    }
    let element = document.querySelector('.contact-me');
    contactDownAni();

    if (document.querySelector('.contact-me') === null) {
        element = document.querySelector('.main-text');
    }

    setTimeout(function() {
        element.innerHTML = `<p>Java Developer</p>
                         <p translation-data="main-text"></p>
                 
                        <button id="downloadCV" type="button" class="btn btn-primary mt-3 cv" translation-data="cvdownload"></button>`;

        element.classList.add('main-text');
        element.classList.remove('contact-me');

        centerStartAni();
        loadLanguage();
    }, 400);

    let urlParams = new URLSearchParams(window.location.search);
    let lang = urlParams.get('lang');

    activeButton(0);
    getBlobAni();

}

function gallery() {
    activeButton(2);
    switchPgae = true;

    var styleSheet = document.styleSheets[0]; 
    for (var i = 0; i < styleSheet.cssRules.length; i++) {
        var rule = styleSheet.cssRules[i];
        if (rule.selectorText === '.row div:first-child') {
            styleSheet.deleteRule(i);
            break;
        }
    }
    blobUpAni();

    setTimeout(function() {
        const projects = [
            { image: 'images/Klienci.png',isNew: `New`,  transTitle: `KliTrans`, description: 'KliDes', des2: 'AvaGit', link: `onclick="window.location.href = 'https://github.com/YouStee22/KlienciUslugSieciowych';"`},
            { image: 'images/LERO.png',  transTitle: `Lero`, description: 'LeroDes', linkTarger: '<a href="https://youstee22.github.io/LERO/" translation-data="AvaLink"></a>', link: `onclick="window.location.href = 'https://github.com/YouStee22/LERO';"`, isWithLink: true },
            { image: 'images/Serwis.png', transTitle: `SerFir`, description: 'SerFirDes', des2: 'AvaGit', link: `onclick="window.location.href = 'https://github.com/YouStee22/SerwisFirmowy';"`},
            { image: 'images/Projekt.png',isNew: `New`,  transTitle: `Solar`, description: 'SolarDes', des2: 'AvaGit', link: `onclick="window.location.href = 'https://github.com/YouStee22/SolarSystem';"`},
            { image: 'images/Rejestr.png', transTitle: `ResReg`, description: 'ResRegDes', des2: 'AvaGit', link: `onclick="window.location.href = 'https://github.com/YouStee22/RejestrMieszkanow';"` },
            { image: 'images/DynamiczneCV.png',isNew: `New`, transTitle: `DynaCV`, description: 'DynaCVDes', linkTarger: '<a href="https://youstee22.github.io/DynamiczneCV/"  translation-data="AvaLink"></a>', link: `onclick="window.location.href = 'https://github.com/YouStee22/DynamiczneCV';"` },
        ];

        const row = document.querySelector('.row');
        let html = '';

        projects.forEach(project => {
            html += `
                <div class="col-md-5 project m-4">
                    <div class="content-pr">
                        <div class="contentTech">
                            <div class="main-content">
                                <p>${project.isNew ? `${project.isNew}` : ' '}</p>
                                <p class="headerDesc" translation-data="${project.transTitle}"></p>
                                <p translation-data="${project.description}"></p>
                            </div>      
                        </div>
                        <div class="img-div">
                            <img src="${project.image}" class="imgPort">
                        </div>
                        <div>
                            <p class="mt-3">${project.linkTarger ? `${project.linkTarger}` : ''}</p>
                            <button type="button" ${project.link} class="btn btn-dark mt-3 rounded-pill" translation-data="ProjectButton">
                        </div>
                    </div>
                </div>    
               `;
            });
        row.innerHTML = html;
        loadLanguage();
        rowChangeAni();    

    }, 2200);
    
    resizeHeightAni();
    if (document.querySelector('.contact-me') !== null)
        document.querySelector('.contact-me').classList.remove('.profile');
}

function activeButton(number) {
    const navbarNav2 = document.getElementById('navbarNav');
    const navItems = navbarNav2.querySelectorAll('.nav-item');

    navItems[0].classList.remove('active');
    navItems[1].classList.remove('active');
    navItems[2].classList.remove('active');

    navItems[number].classList.add('active'); 
}


function goOutFromProjects() {
    resizeBackHeightAni();
    document.querySelector('.container').innerHTML = `
                                                        <div class="row justify-content-center">
                                                            <div class="col-md-5 col-sm-5 port-hei">
                                                                <div class="blob">
                                                        
                                                                </div>
                                                            </div>
                                                            <div class="col-md-7 col-sm-7">
                                                                <div class="main-text port-hei"> 
                                                        
                
                                                                </div>
                                                            </div> 
                                                        </div>`;
    switchPgae = false;   
}