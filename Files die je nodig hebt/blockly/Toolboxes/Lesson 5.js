/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 *
 * @fileoverview XML toolbox embedded into a JavaScript text string.
 */
 'use strict';

 /** Create a namespace for the application. */
 var Ardublockly = Ardublockly || {};
 
 Ardublockly.TOOLBOX_XML =
'<xml>' +
'  <sep></sep>' +
'  <category id="catFunctions" name="Functions" custom="PROCEDURE"></category>' +
'   <sep></sep>' +
'  <category id="catLesson 1" name="Lesson 1">' +
'    <block type="turn_led_on"></block>' +
'      <value name="STATE">' +
'        <block type="io_highlow"></block>' +
'      </value>' +
'   <block type="ON_OFF"></block>' +
'  </category>' +
'   <sep></sep>' +
'  <category id="catLesson 2" name="Lesson 2">' +
'    <block type="Read_Button"></block>' +
'    <block type="controls_if">' +
    '<mutation else="1"></mutation>' +
'   </block>' +
'  </category>' +

'   <sep></sep>' +
'  <category id="catLesson 3" name="Lesson 3">' +

'    <block type="controls_if">' +
'       <mutation else="1"></mutation>' +
'       <value name="IF0">' +
'           <block type="Read_Button"></block>' +
'       </value>' +
'       <value name="ELSE">' +
'         <block type="turn_led_on">' +
'           <value name="STATE">' +
'                <block type="ON_OFF"></block>' +
'           </value>' +
'           </block>' +
'           </value>' +
'       <value name="DO0">' +
'         <block type="turn_led_on">' +
'           <value name="STATE">' +
'                <block type="ON_OFF"></block>' +
'           </value>' +
'           </block>' +
'           </value>' +
'           </block>' +






'  </category>' +
'   <sep></sep>' +
'  <category id="catLesson 4" name="Lesson 4">' +
'    <block type="time_delaymicros">' +
'      <value name="DELAY_TIME_MICRO">' +
'        <block type="math_number">' +
'          <field name="NUM">2000</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'        <block type="math_number">' +
'          <field name="NUM">2000</field>' +
'        </block>' +
'  </category>' +
'   <sep></sep>' +
'  <category id="catLesson 5" name="Lesson 5">' +
'    <block type="controls_if">' +
'   </block>' +
'  </category>' +















'</xml>';