
    // <nav> Javascript navbar(doesn’t need to work) </nav>
    var x = document.createElement("NAV");
    
    var anchorElmnt = document.createElement("A");
    anchorElmnt.setAttribute("href", "#");
    var home = document.createTextNode(" Home ");
    anchorElmnt.append(home);
    x.append(anchorElmnt);


    var nav = document.createElement("A");
    nav.setAttribute("href", "#");
    var about = document.createTextNode(" About ")
    nav.append(about);
    x.append(nav);

    var nav2 = document.createElement("A");
    nav2.setAttribute("href", "#");
    var contact = document.createTextNode(" Contact ")
    nav2.append(contact);
    x.append(nav2);
        
    var nav3 = document.createElement("A");
    nav3.setAttribute("href", "#");
    var services = document.createTextNode(" Services ")
    nav3.append(services);
    x.append(nav3);

    var nav4 = document.createElement("A");
    nav4.setAttribute("href", "#");
    var blog = document.createTextNode(" Blog ")
    nav4.append(blog);
    x.append(nav4);

    document.body.append(x);


    // <h1> An h1 tag</h1>
    var h1 = document.createElement('h1');
    h1.textContent = 'BREAKING NEWS';
    document.body.append(h1);


    // <p> A 'p' tag</p>
    var p = document.createElement('p');
    p.textContent = 'Meditation gentrify fam, yuccie kickstarter brunch vape. Pitchfork freegan biodiesel bicycle rights. Semiotics flexitarian four loko XOXO raw denim chartreuse. Cray ramps microdosing everyday carry bicycle rights vexillologist. Bitters bushwick schlitz, 3 wolf moon tofu hoodie beard bicycle rights truffaut keffiyeh sartorial. Affogato coloring book glossier humblebrag hella godard pour-over fashion axe leggings tote bag af. Lomo neutra vape keytar man bun. Pabst fanny pack meggings, gochujang deep v stumptown banjo flexitarian poke hoodie. Jianbing iceland seitan echo park, tacos literally cornhole poke pinterest blue bottle man bun. Intelligentsia affogato freegan quinoa cray. Banjo bicycle rights quinoa, meditation pork belly brooklyn tumeric thundercats adaptogen portland vape art party. Cloud bread four loko ramps woke, la croix artisan poke tbh kale chips cornhole snackwave lo-fi normcore meditation.';
    document.body.append(p);


    // <ul> 'A list' - since there was no specification on a list, I created 'ul' since we did 'ol' last homework </ul>
    
    var x = document.createElement('ul');
    var y = document.createElement('li');
    y.textContent = 'Breaking News';
    x.append(y)

    var r = document.createElement('li');
    r.textContent = 'World News';
    x.append(r)

    var s = document.createElement('li');
    s.textContent = 'Weather';
    x.append(s)
    document.body.append(x);

        
    // Footer 

    var foot = document.createElement('footer');
    foot.textContent = 'FOOTER';
    document.body.append(foot);

    var myRights = document.createElement("rights");
    myRights.textContent = ' Copyright 2021 | All Rights Reserved '
    document.body.append(myRights);
    



    
  





    



