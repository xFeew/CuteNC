#ifndef CONTROLLERS_H
#define CONTROLLERS_H


#include <Qt>
#include <QObject>
#include <QCoreApplication>
#include <QWindow>
#include <QString>
#include <QDebug>
#include <list>
#include <QVector>
#include <QOpenGLFunctions>
#include <QOpenGLContext>
#include <QOffscreenSurface>
#include <QFile>
#include <QDir>

#include <QJsonDocument>
#include <QJsonObject>
#include <QJsonArray>
#include <QJsonValue>
#include <QVariantMap>

#include <QHostAddress>
#include <QNetworkInterface>

#include "httplistener.h"
#include "httprequesthandler.h"
#include "../global.h"

#include "comport.h"
#include "console.h"
#include "axiscontroller.h"

#define SETTINGS_FILE "settings.json"
namespace CuteNC{
class Backend : public QObject
{
    Q_OBJECT
    Q_DISABLE_COPY(Backend)
public:
    /** Constructor. Creates a Backend handler. @param parent Parent object. */
    explicit Backend(QObject *parent = nullptr);
    /** Destructor */
    virtual ~Backend();
    /** Closes backend. */
    void close();
    /** Debugging. */
    Q_INVOKABLE void debug();
    /** Start backend side inovked from QML indicating everything on that side has loaded (GUI). */
    Q_INVOKABLE void startUp();
    /** Gets full path to settings.json */
    QString getSettingsFilePath() const;
    /** Finds file by its name, returns full path. @param fileName name of the file with extension. */
    Q_INVOKABLE QString getFilePath(QString fileName) const;
    /** Finds file by its name, returns file contents. @param fileName name of the file with extension. */
    Q_INVOKABLE QString getJsonFile(QString fileName);


    Q_INVOKABLE void commandReceived(QString command);
    void setupWebWidget(QString hostAddress, QString port);

    Q_INVOKABLE void setTheme(QString themeName);
    Q_INVOKABLE QString getThemeName(int position);
    void getAllThemes();
    Q_INVOKABLE int numberOfThemes();
    Q_INVOKABLE void refreshWidgetsInvoker();

    /** Load json settings */
    Q_INVOKABLE void setup();

    /** Returns theme saved in settings file */
    Q_INVOKABLE QString getSelectedTheme() const;

    void getWidgets();
    /** Returns true if 'white' color suits the best for passed parameter color. @param color is the color to determine.*/
    Q_INVOKABLE bool determineFontColor(QString color);

    QString searchFile(QString fileName);
    /** Check whether QML side loaded every component */
    Q_INVOKABLE bool isQmlReady = false;


    /** signals */
    void axisController_SendNextCommand();


    /** Public objects exposed to QML */
    Console *m_Console;
    Comport *m_Comport;
    AxisController *m_AxisController;

private:
    HttpListener* httpListener;
    QList<QString> themeNames;
    QJsonDocument jsonDoc;
    QString selectedThemeName;

public slots:
    void handleQuit();

signals:
    void signal_SaveSettings();
    void signal_LoadSettings();

    void signal_RefreshWidgets();
    void signal_GetThemes();

    void signal_Ready();

    void signal_ReadyForNextCommand();

    void appendPortsToComboBox();

    void debugSignal(QString text);

    void showNotification(QString v_type, QString v_message);
};
}
#endif // CONTROLLERS_H
