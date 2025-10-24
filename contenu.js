 // Utilitaire pour échapper les caractères spéciaux des regex
    function echapperRegExp(chaine) {
        return chaine.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }

    const inputRecherche = document.getElementById('inputRecherche');
    const btnRecherche = document.getElementById('btnRecherche');
    const resultatRecherche = document.getElementById('resultatRecherche');
    const contenuPrincipal = document.getElementById('contenuPrincipal');

    function compterOccurrences(mot) {
        if (!mot || !mot.trim()) {
        resultatRecherche.textContent = 'Trouvé(s) : 0';
        return;
        }
        const texte = contenuPrincipal.innerText || '';
        const re = new RegExp('\\b' + echapperRegExp(mot.trim()) + '\\b', 'gi');
        const correspondances = texte.match(re);
        const nombre = correspondances ? correspondances.length : 0;
        resultatRecherche.textContent = 'Trouvé(s) : ' + nombre;
    }

    // Déclenchement au clic ou à la touche Entrée
    btnRecherche.addEventListener('click', () => compterOccurrences(inputRecherche.value));
    inputRecherche.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') compterOccurrences(inputRecherche.value);
    });

    // Ajout dynamique
    const btnAjouter = document.getElementById('btnAjouter');
    const conteneurAjoute = document.getElementById('conteneurAjoute');

    function appliquerStylesEl(el, taille, styleTexte, surligne) {
        // taille
        if (taille === 'small') el.style.fontSize = '0.95rem';
        else if (taille === 'large') el.style.fontSize = '1.15rem';
        else el.style.fontSize = '1rem';

        // style du texte
        el.style.fontStyle = 'normal';
        el.style.fontWeight = '400';
        if (styleTexte === 'bold') el.style.fontWeight = '700';
        else if (styleTexte === 'italic') el.style.fontStyle = 'italic';

        // surlignage
        if (surligne) {
            // ajouter la classe visuelle pour garder styles cohérents
            el.classList.add('surligne');
        } else {
            el.classList.remove('surligne');
            // retirer styles d'espacement si présents
            el.style.padding = el.style.padding || '';
        }
    }

    btnAjouter.addEventListener('click', () => {
        // Ajout par défaut : paragraphe
        const contenu = document.getElementById('nouveauContenu').value.trim();
        if (!contenu) {
        alert('Veuillez entrer du contenu avant d\'ajouter.');
        return;
        }
        const taille = document.getElementById('choixTaille').value;
        const styleTexte = document.querySelector('input[name="choixTexte"]:checked').value;
        const surligne = document.getElementById('choixSurligne').checked;

        const p = document.createElement('p');
        p.textContent = contenu;
        appliquerStylesEl(p, taille, styleTexte, surligne);
        conteneurAjoute.appendChild(p);

        // vider le textarea et mettre à jour le compteur automatiquement
        document.getElementById('nouveauContenu').value = '';
        compterOccurrences(inputRecherche.value);
    });