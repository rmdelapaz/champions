(function() {
    var pages = [
        { file: 'champions_introduction.html', title: 'Introduction' },
        { file: 'champions_character_creation.html', title: 'Character Creation' },
        { file: 'champions_powers_system.html', title: 'Powers System' },
        { file: 'champions_combat_system.html', title: 'Combat System' },
        { file: 'champions_skills_equipment.html', title: 'Skills & Equipment' },
        { file: 'champions_gamemastering.html', title: 'Gamemastering' },
        { file: 'champions_dice_roller.html', title: 'Dice Roller' }
    ];

    var current = location.pathname.split('/').pop();
    var idx = -1;
    for (var i = 0; i < pages.length; i++) {
        if (pages[i].file === current) { idx = i; break; }
    }

    function buildNav() {
        var nav = document.createElement('nav');
        nav.className = 'page-nav';

        if (idx > 0) {
            var prev = document.createElement('a');
            prev.href = pages[idx - 1].file;
            prev.textContent = '\u25C0 ' + pages[idx - 1].title;
            nav.appendChild(prev);
        } else {
            var ph = document.createElement('span');
            ph.className = 'nav-placeholder';
            nav.appendChild(ph);
        }

        var home = document.createElement('a');
        home.href = 'index.html';
        home.className = 'nav-home';
        home.textContent = '\u2302 Home';
        nav.appendChild(home);

        if (idx >= 0 && idx < pages.length - 1) {
            var next = document.createElement('a');
            next.href = pages[idx + 1].file;
            next.textContent = pages[idx + 1].title + ' \u25B6';
            nav.appendChild(next);
        } else {
            var ph2 = document.createElement('span');
            ph2.className = 'nav-placeholder';
            nav.appendChild(ph2);
        }

        return nav;
    }

    // Insert top nav
    document.body.insertBefore(buildNav(), document.body.firstChild);
    // Insert bottom nav
    document.body.appendChild(buildNav());

    // Theme toggle button
    var btn = document.createElement('button');
    btn.className = 'theme-toggle';
    btn.id = 'themeToggle';
    btn.title = 'Toggle light/dark mode';
    btn.textContent = '\uD83C\uDF19';
    document.body.appendChild(btn);

    var saved = sessionStorage.getItem('theme');
    if (saved === 'dark') {
        document.body.classList.add('dark-mode');
        btn.textContent = '\u2600\uFE0F';
    }
    btn.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        var isDark = document.body.classList.contains('dark-mode');
        btn.textContent = isDark ? '\u2600\uFE0F' : '\uD83C\uDF19';
        sessionStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
})();
