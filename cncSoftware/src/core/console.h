#ifndef CONSOLE_H
#define CONSOLE_H

#include <Qt>
#include <QObject>
#include <QString>
#include <QDebug>
#include "axiscontroller.h"
/**
  The console is used to display messages send or received to host and device.
*/
class Console : public QObject
{
     Q_OBJECT


signals:
    /**
      Get array of bytes of data.
      @param data is the data that's send to host from a device.
    */
    void getData(const QByteArray &data);

public:
    /**
      Constructor.
    */
    explicit Console(QObject *parent = nullptr, AxisController *axisController = nullptr);


    /** Destructor */
    virtual ~Console();

    void close();

    Q_INVOKABLE void debug();
    void displayMessages();


    /** log function, creates and sends a message to console output.
        @param type is a string representing type of a message with corresponding color defined in theme, type can only be: info, error, warning, debug, log.
        @param source is a string representing from where a message was sent eg. backend, comport.
        @param message is a string that can be anything.
    */
   // Q_INVOKABLE void log(QString type, QString source, QString message, QString textColor = nullptr);
    void refreshConsoleDummy();

    void gCodeInterpreter(QStringList groups);

    AxisController* m_AxisController;
private:

public slots:
    void displayEachSecond();
    Q_INVOKABLE void log(QString type, QString source, QString message, QString textColor = nullptr);
signals:
    void consoleDebug(QString text);
    void sendToConsole(QString time, QString type, QString source, QString message, QString textColor);

    void signal_ReadyForNextCommand();


};
#endif // CONSOLE_H
