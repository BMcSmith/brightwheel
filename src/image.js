/**
 * brightwheel
 *
 * Copyright © 2016 Allen Smith &lt;loranallensmith@github.com&gt;. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

 /** @jsx etch.dom */

import etch from 'etch';
import classNames from 'classnames';
import BrightwheelComponent from './brightwheel-component';

class Image extends BrightwheelComponent {

  render() {
    let classes = classNames(
      {
        [`img-${this.properties.shape}`]: this.properties.shape !== undefined,
        'media-object': this.properties.isMediaObject === true,
        [`pull-${this.properties.pull}`]: this.properties.pull !== undefined
      },
      this.properties.classNames
    );

    return (<img {...this.properties.attributes} className={classes} src={this.properties.src} width={this.properties.width} height={this.properties.height} on={{
      click: this.onClick,
      copy: this.onCopy,
      cut: this.onCut,
      paste: this.onPaste,
      compositionend: this.onCompositionEnd,
      compositionstart: this.onCompositionStart,
      compositionupdate: this.onCompositionUpdate,
      keydown: this.onKeyDown,
      keypress: this.onKeyPress,
      keyup: this.onKeyUp,
      focus: this.onFocus,
      blur: this.onBlur,
      change: this.onChange,
      input: this.onInput,
      submit: this.onSubmit,
      contextmenu: this.onContextMenu,
      dblclick: this.onDoubleClick,
      drag: this.onDrag,
      dragend: this.onDragEnd,
      dragenter: this.onDragEnter,
      dragexit: this.onDragExit,
      dragleave: this.onDragLeave,
      dragover: this.onDragOver,
      dragstart: this.onDragStart,
      drop: this.onDrop,
      mousedown: this.onMouseDown,
      mousenter: this.onMouseEnter,
      mouseleave: this.onMouseLeave,
      mousemove: this.onMouseMove,
      mouseout: this.onMouseOut,
      mouseover: this.onMouseOver,
      mouseup: this.onMouseUp,
      select: this.onSelect,
      touchcancel: this.onTouchCancel,
      touchend: this.onTouchEnd,
      touchmove: this.onTouchMove,
      touchstart: this.onTouchStart,
      scroll: this.onScroll,
      wheel: this.onWheel,
      abort: this.onAbort,
      canplay: this.onCanPlay,
      canplaythrough: this.onCanPlayThrough,
      durationchange: this.onDurationChange,
      emptied: this.onEmptied,
      encrypted: this.onEncrypted,
      ended: this.onEnded,
      error: this.onError,
      loadeddata: this.onLoadedData,
      loadedmetadat: this.onLoadedMetadata,
      loadstart: this.onLoadStart,
      pause: this.onPause,
      play: this.onPlay,
      playing: this.onPlaying,
      progress: this.onProgress,
      ratechange: this.onRateChange,
      seeked: this.onSeeked,
      seeking: this.onSeeking,
      stalled: this.onStalled,
      suspend: this.onSuspend,
      timeupdate: this.onTimeUpdate,
      volumechange: this.onVolumeChange,
      waiting: this.onWaiting,
      load: this.onLoad,
      animationstart: this.onAnimationStart,
      animationend: this.onAnimationEnd,
      animationiteration: this.onAnimationIteration,
      transitionend: this.onTransitionEnd
    }}></img>);
  }

}

export default Image;
