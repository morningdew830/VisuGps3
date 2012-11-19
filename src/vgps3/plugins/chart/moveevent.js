/**
 * Copyright 2012 Victor Berchet
 *
 * This file is part of VisuGps3
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 */

/**
 * @fileoverview
 * @author Victor Berchet <victor@suumit.com>
 */

goog.provide('vgps3.chart.MoveEvent');

goog.require('goog.events.Event');



/**
 * @param {number} position
 *
 * @constructor
 * @extends {goog.events.Event}
 */
vgps3.chart.MoveEvent = function(position) {
  goog.base(this, vgps3.chart.EventType.MOVE);

  /**
  * @type {number}
  */
  this.position = position;
};
goog.inherits(vgps3.chart.MoveEvent, goog.events.Event);


