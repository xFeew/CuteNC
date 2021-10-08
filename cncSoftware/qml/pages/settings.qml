import QtQuick 2.15
import QtQuick.Controls 2.15
import QtGraphicalEffects 1.15
import "../components"
Item {
    id: settingsPage
    width: 800
    height: 600


    property int setWidth
    property int setHeight
    property int minimumWidth
    property int minimumHeight
    property int maximumWidth
    property int maximumHeight
    property bool setMaximumSize
    property bool setMinimumSize
    property color textColorLight
    property color textColorDark
    property color defaultColor
    property color onHoverColor
    property color onPressedColor
    property color backgroundColor: "white"
    property color borderColor

    property bool borderVisible
    property int borderWidth
    property int borderRadius

    property int fontPointSize
    property string fontFamily

    property string fontAwesomeIcon
    property string text
    property string name
    property string value


    function jsonSettings(){
        var JsonString = backend.getJSONFile("../json/","TemplateFile.json");
        var JsonObject = JSON.parse(JsonString);

        var JsonStringTheme = backend.getJSONFile("../json/themes/",backend.getSelectedTheme());
        var JsonObjectTheme = JSON.parse(JsonStringTheme);

        backgroundColor = JsonObjectTheme.backgroundColor;

        //retrieve values from JSON
        name = JsonObject.name;
        value = JsonObject.value;

        borderVisible = JsonObject.borderVisible;
        borderWidth = JsonObject.borderWidth;
        borderRadius = JsonObject.borderRadius;

        textColorLight = JsonObject.colors.textColorLight;
        textColorDark = JsonObject.colors.textColorDark;
        defaultColor = JsonObject.colors.defaultColor;
        onHoverColor = JsonObject.colors.onHoverColor;
        onPressedColor = JsonObject.colors.onPressedColor

        borderColor = JsonObject.colors.borderColor;

        setWidth = JsonObject.width;
        setHeight = JsonObject.height;
        minimumWidth = JsonObject.minimumWidth;
        minimumHeight = JsonObject.minimumHeight;
        maximumWidth = JsonObject.maximumWidth;
        maximumHeight = JsonObject.maximumHeight;
        setMaximumSize = JsonObject.setMaximumSize;
        setMinimumSize = JsonObject.setMinimumSize;
        fontAwesomeIcon = JsonObject.fontAwesomeIcon;
        text = JsonObject.text;

    }


    property string selectedTheme
    function getThemeNames() {
        model.clear()
        for(var i = 0; i < backend.numberOfThemes();i++){
            model.append({text: backend.getThemeName(i).replace(".json","")})
        }
    }
    Rectangle{
        id:background
        color: backgroundColor
        anchors.fill:parent

        Component.onCompleted: {
            jsonSettings()
        }

        CuteNCButton{
            id:btn
            anchors.left: parent.left
            anchors.top: parent.top
            anchors.topMargin: 100
            anchors.leftMargin: 100
        }

        ComboBox {
            id: comboBox
            x: 8
            y: 8
            model: ListModel {
                id: model
            }

            onCurrentValueChanged: {
                selectedTheme = currentText;
            }

        }
        //Add new element (widget)
        Button {
            id: button
            x: 166
            y: 8
            text: qsTr("Set Selected")

            anchors.topMargin: 20
            anchors.leftMargin: 20
            onClicked:{                            
                backend.setTheme(selectedTheme)
                backend.refreshWidgetsInvoker();
                backend.showNotification("confirm","Theme set!")
            }
        }

        Rectangle {
            id: rectangle
            x: 266
            y: 214
            width: 30
            height: 200
            color: "#d8bcbc"
            radius:15
            InnerShadow {
                  id:shadow
                  anchors.fill: rectangle
                  radius: 10.0
                  spread: 0.1
                  samples: 16
                  horizontalOffset:0
                  verticalOffset: 0
                  color: "#b0000000"
                  source: rectangle
              }
        }


    }

    Connections{
        target: backend
        function onGetThemes(){
            console.log("getting themes")
            getThemeNames()
        }
        function onRefreshWidgets(){
            jsonSettings()
        }
    }
    Component.onCompleted: {
        getThemeNames()
    }
}

