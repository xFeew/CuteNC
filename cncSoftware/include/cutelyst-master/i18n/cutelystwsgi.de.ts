<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="de" sourcelanguage="en">
<context>
    <name>main</name>
    <message>
        <source>Fast, developer-friendly WSGI server</source>
        <translation>Schneller, entwicklerfreundlicher WSGI-Server</translation>
    </message>
    <message>
        <source>load config from ini file</source>
        <translation>Konfiguration aus INI-Datei laden</translation>
    </message>
    <message>
        <source>file</source>
        <translation>Datei</translation>
    </message>
    <message>
        <source>load config from JSON file</source>
        <translation>Konfiguration aus JSON-Datei laden</translation>
    </message>
    <message>
        <source>chdir to specified directory before apps loading</source>
        <translation>Wechsel vor dem Laden der Anwendung in das angegebene Verzeichnis</translation>
    </message>
    <message>
        <source>directory</source>
        <translation>Verzeichnis</translation>
    </message>
    <message>
        <source>chdir to specified directory afterapps loading</source>
        <translation>Wechsel nach dem Laden der Anwendung in das angegebene Verzeichnis</translation>
    </message>
    <message>
        <source>set lazy mode (load app in workers instead of master)</source>
        <translation>lazy-Modus nutzen (Anwendung in den Workers anstatt im Master laden)</translation>
    </message>
    <message>
        <source>Application to load</source>
        <translation>Zu ladende Anwendung</translation>
    </message>
    <message>
        <source>Number of thread to use</source>
        <translation>Anzahl der zu nutzenden Threads</translation>
    </message>
    <message>
        <source>threads</source>
        <translation>Threads</translation>
    </message>
    <message>
        <source>spawn the specified number of processes</source>
        <translation>Anzahl der zu startenden Prozesse</translation>
    </message>
    <message>
        <source>processes</source>
        <translation>Prozesse</translation>
    </message>
    <message>
        <source>Enable master process</source>
        <translation>Master-Prozess aktivieren</translation>
    </message>
    <message>
        <source>set internal buffer size</source>
        <translation>Interne Puffergr????e</translation>
    </message>
    <message>
        <source>bytes</source>
        <translation>Bytes</translation>
    </message>
    <message>
        <source>set size after which will buffer to disk instead of memory</source>
        <translation>Gr????e ab der auf die Festplatte anstatt in den Arbeitsspeicher gepuffert wird</translation>
    </message>
    <message>
        <source>set buffer size for read() in post buffering mode</source>
        <translation>Puffergr????e f??r read() im Post-Buffering-Modus</translation>
    </message>
    <message>
        <source>bind to the specified TCP socket using HTTP protocol</source>
        <translation>Mit HTTP-Protokoll an den angegebenen TCP-Socket binden</translation>
    </message>
    <message>
        <source>address</source>
        <translation>Adresse</translation>
    </message>
    <message>
        <source>bind to the specified TCP socket using HTTP/2 protocol</source>
        <translation>Mit HTTP/2-Protokoll an den angegebenen TCP-Socket binden</translation>
    </message>
    <message>
        <source>Defined the HTTP/2 header table size</source>
        <translation>Tabellengr????e f??r HTTP/2-Header</translation>
    </message>
    <message>
        <source>size</source>
        <translation>Gr????e</translation>
    </message>
    <message>
        <source>Upgrades HTTP/1 to H2c (HTTP/2 Clear Text)</source>
        <translation>HTTP/1 auf H2c (HTTP/2 Clear Text) aufwerten</translation>
    </message>
    <message>
        <source>Negotiate HTTP/2 on HTTPS socket</source>
        <translation>HTTP/2 auf HTTPS-Socket aushandeln</translation>
    </message>
    <message>
        <source>bind to the specified TCP socket using HTTPS protocol</source>
        <translation>Mit HTTPS-Protokoll an den angegebenen TCP-Socket binden</translation>
    </message>
    <message>
        <source>bind to the specified UNIX/TCP socket using FastCGI protocol</source>
        <translation>Mit FastCGI-Protokoll an den angegebenen UNIX/TCP-Socket binden</translation>
    </message>
    <message>
        <source>set the LOCAL socket access, such as &apos;ugo&apos; standing for User, Group, Other access</source>
        <translation>LOKALEN Socket-Zugriff festlegen, bspw. &apos;ugo&apos;, was f??r User, Group, Other steht</translation>
    </message>
    <message>
        <source>options</source>
        <translation>Optionen</translation>
    </message>
    <message>
        <source>set internal sockets timeout</source>
        <translation>Interne Socket-Zeit??berschreitung</translation>
    </message>
    <message>
        <source>seconds</source>
        <translation>Sekunden</translation>
    </message>
    <message>
        <source>map mountpoint to static directory (or file)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>mountpoint=path</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>like static-map but completely appending the requested resource to the docroot</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>auto restarts when the application file changes</source>
        <translation>Automatischer Neustart falls sich die Anwendungsdatei ver??ndert</translation>
    </message>
    <message>
        <source>reload application if the specified file is modified/touched</source>
        <translation>Anwendung neu starten wenn sich die angegebene Datei ver??ndert</translation>
    </message>
    <message>
        <source>enable TCP NODELAY on each request</source>
        <translation>TCP NODELAY by jeder Anfrage aktivieren</translation>
    </message>
    <message>
        <source>enable TCP KEEPALIVEs</source>
        <translation>TCP KEEPALIVEs aktivieren</translation>
    </message>
    <message>
        <source>set SO_SNDBUF</source>
        <translation>SO_SNDBUF festlegen</translation>
    </message>
    <message>
        <source>set SO_RCVBUF</source>
        <translation>SO_RCVBUF festlegen</translation>
    </message>
    <message>
        <source>sets the socket receive buffer size in bytes at the OS level. This maps to the SO_RCVBUF socket option</source>
        <translation>Gr????e des Socket-Empfangspuffer in Bytes auf Betriebsystemebene. Die Zuordnung erfolgt zur Socket-Option SO_RCVBUF</translation>
    </message>
    <message>
        <source>Kbytes</source>
        <translation>kBytes</translation>
    </message>
    <message>
        <source>create pidfile (before privileges drop)</source>
        <translation>PID-Datei schreiben (vor dem ??ndern von Nutzer, Gruppe und umask)</translation>
    </message>
    <message>
        <source>create pidfile (after privileges drop)</source>
        <translation>PID-Datei schreiben (nach dem ??ndern von Nutzer, Gruppe und umask)</translation>
    </message>
    <message>
        <source>stop an instance</source>
        <translation>Instanz stoppen</translation>
    </message>
    <message>
        <source>pidfile</source>
        <translation>PID-Datei</translation>
    </message>
    <message>
        <source>setuid to the specified user/uid</source>
        <translation>Ausf??hrenden Nutzer auf angegebenen Benutzer/uid wechseln</translation>
    </message>
    <message>
        <source>user/uid</source>
        <translation>Benutzer/uid</translation>
    </message>
    <message>
        <source>setgid to the specified group/gid</source>
        <translation>Ausf??hrende Gruppe auf angegebene Gruppe/gid wechseln</translation>
    </message>
    <message>
        <source>group/gid</source>
        <translation>Gruppe/gid</translation>
    </message>
    <message>
        <source>disable additional groups set via initgroups()</source>
        <translation>Zus??tzliche Gruppen via initgroups() deaktivieren</translation>
    </message>
    <message>
        <source>chown unix sockets</source>
        <translation>Eigent??mer der Unix-Sockets ??ndern</translation>
    </message>
    <message>
        <source>uid:gid</source>
        <translation>uid:gid</translation>
    </message>
    <message>
        <source>set file mode creation mask</source>
        <translation>Maske zur Dateierstellung (umask)</translation>
    </message>
    <message>
        <source>mode</source>
        <translation>umask</translation>
    </message>
    <message>
        <source>set CPU affinity with the number of CPUs available for each worker core</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>core count</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>enable SO_REUSEPORT flag on socket (Linux 3.9+)</source>
        <translation>SO_REUSEPORT bei Sockets einschalten (Linux 3.9+)</translation>
    </message>
    <message>
        <source>balances new connections to threads using round-robin</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Enable frontend (reverse-)proxy support</source>
        <translation type="unfinished"></translation>
    </message>
</context>
</TS>
