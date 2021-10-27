#ifndef GLOBAL_H
#define GLOBAL_H
#include "src/core/backend.h"

#include "src/console/console.h"
#include "src/serialport/serial.h"
#include "src/websocket/websocket.h"
#include "src/core/fileparser.h"
extern Backend backend;
extern Console console;
extern Comport comport;

extern Fileparser fileparser;



#endif