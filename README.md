La web que has de desenvolupar és una web d'informació sobre les naus de Star Wars! S'haurà de mostrar el llistat de naus amb la informació detallada de cada una d'elles. usarem una API que ens permetrà obtenir el llistat de naus fàcilment.

- Exercici 1
Per a començar, el primer que has d'implementar és la pantalla principal en la qual es mostra el llistat de naus.

Quan obtinguis el llistat de naus del servidor, veuràs que aquest et retorna moltes dades interessants de cada nau, però en la pantalla principal només mostrarem les dades més importants per a no saturar-li d'informació.

Dades a mostrar de cada nau del llistat:

· Nom de nau.

· Model.

- Exercici 2
En aquest exercici has de crear la fitxa de cada nau, mostrant tots els seus detalls.

L'usuari/ària podrà accedir als detalls de cada nau clicant en cadascuna de les naus del llistat:

- Exercici 3
GENIAL!, ja tens una versió bàsica de la web creada, en la qual l'usuari/ària pot visualitzar el llistat de naus i veure la fitxa de cadascuna clicant en ella.

La part negativa, com hauràs pogut observar, és que tenim limitada la web a 10 naus. Si et fixes en la resposta de la crida API, veuràs que indica que hi ha un total de 36 naus, les quals mostrarem a l'usuari/ària sota demanda.

Has d'implementar un botó al final del llistat de naus, amb el text "view more", que permeti obtenir més naus del servidor i s'agreguin al llistat de naus mostrades a l'usuari/ària.

- Exercici 4
Modernització del site. Canvia els estils que creguis pertinents. L'únic criteri és que se sembli el màxim possible a la web oficial de Star Wars.

- Exercici 5
Igual que hem fet en els lliuraments anteriors, implementarem una pàgina inicial de benvinguda, i mitjançant un botó, es podrà accedir a la pàgina principal de naus. Per a això, has d'usar el routing de React.

A més del botó d'accés en la pàgina principal, l'usuari/ària tindrà accés a la pàgina principal mitjançant la barra de navegació superior.

A tal fi, si no has implementat encara el component, hauràs de crear la barra de navegació superior.

- Exercici 6
Ja gairebé has acabat la base del projecte!, l'única cosa que et falta és la gestió d'usuaris/es.

Has d'implementar una pantalla de login i registre, en les quals mitjançant localstorage, ja que no posseïm un servidor d'autenticació d'usuaris/es, es puguin registrar i logar posteriorment en cas que existeixin.

En aquest exercici amb què mostris el resultat del login/registre per consola és suficient.


- Exercici 7
Modificarem lleugerament la navegació, perquè quan no es detecti l'usuari/ària registrat, se li porti al "login".

El llistat de naus només pot ser visible per a usuaris/es registrats, has de protegir les rutes.
