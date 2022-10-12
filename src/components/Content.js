import React from 'react'

function Content() {
  return (
    <div className='content'>
        <h1 id='Global'>Global Event Attributes</h1>
        <p>HTML has the ability to let events trigger actions in a browser, like starting a JavaScript when a user clicks on an element.
          Below are the global event attributes that can be added to HTML elements to define event actions.</p>
        <h1>Window Event Attributes</h1>
        <p>Windows events are related for the window object, and it can only be applied with body tag.</p>
        <table id='Window'className="table1"border={1}>
          <tr><th>Attribute</th>
          <th>Description</th></tr>
          <tr>
            <td>onafterprint</td>
            <td>Executed the script after the document is printed.</td>
          </tr>
          <tr>
            <td>onbeforeprint</td>
            <td>Executed the script before the document is printed.</td>
          </tr>
          <tr>
            <td>onerror</td>
            <td>Executed the script when an error occurs.</td>
          </tr>
          <tr>
            <td>onload</td>
            <td>Executed the script when the webpage is entirely loaded.</td>
          </tr>
          <tr>
            <td>onmessage</td>
            <td>Executed the script when a message event occurs.</td>
          </tr>
          <tr>
            <td>onoffline</td>
            <td>Executed the script when the network connection is disconnected, and browser started working offline.</td>
          </tr>
          <tr>
            <td>ononline</td>
            <td>Executed the script when the browser started working online</td>
          </tr>
          <tr>
            <td>onpageshow</td>
            <td>Executed the script when the current webpage is focused</td>
          </tr>
          <tr>
            <td>onresize</td>
            <td>Executed the script when the window is resized</td>
          </tr>
        </table>
        <h1>Form Event Attributes</h1>
        <p>Events triggered by actions inside a HTML form (applies to almost all HTML elements, but is most used in form elements):</p>
        <table id='Form'className="table1"border={1}>
          <tr><th>Attribute</th>
          <th>Description</th></tr>
          <tr>
            <td>onblur</td>
            <td>Executed the script when form element loses the focus.</td>
          </tr>
          <tr>
            <td>onchange	</td>
            <td>Executed the script when the value of the element is changed.</td>
          </tr>
          <tr>
            <td>onfocus</td>
            <td>Trigger an event when the element gets focused.</td>
          </tr>
          <tr>
            <td>oninput	</td>
            <td>Executed the script when the user enters input to the element.</td>
          </tr>
          <tr>
            <td>onreset</td>
            <td>Triggers the event when user reset the form element values.</td>
          </tr>
          <tr>
            <td>onsearch</td>
            <td>Triggers the event when a search field receives some input.</td>
          </tr>
          <tr>
            <td>onsubmit</td>
            <td>Triggers the event when a form is submitted.</td>
          </tr>
        </table>
        <h1>Keyboard Event Attributes</h1>
        <p>Keyboard event occurs when a user interacts with the keyboard. Following is a list of the Keyboard event.</p>
        <table id='Keyboard'className="table1"border={1}>
          <tr>
            <th>Attribute</th>
            <th>Description</th></tr>
          <tr>
            <td>onkeydown</td>
            <td>Triggers the event when the user presses down a key on the keyboard.</td>
          </tr>
          <tr>
            <td>onkeypress</td>
            <td>Trigger the event when the user presses the key which displays some character.</td>
          </tr>
          <tr>
            <td>onkeyup	</td>
            <td>Trigger the event when the user releases the currently pressed key.</td>
          </tr>
        </table>
        <h1>Mouse Event Attributes</h1>
        <table id='Mouse'className='table1'border={1}>
            <tr>
              <th>Attribute</th>
              <th>Description</th>
            </tr>
            <tr>
              <td>onclick</td>
              <td>Trigger the event when the mouse clicks on the element.</td>
            </tr>
            <tr>
              <td>onmousedown</td>
              <td>Trigger the event when the mouse button is pressed on the element.</td>
            </tr>
            <tr>
              <td>onmousemove</td>
              <td>Trigger the event when the mouse pointer moves over the element.</td>
            </tr>
            <tr>
              <td>onmouseout</td>
              <td>Trigger the event when the mouse moves outside the element.</td>
            </tr>
            <tr>
              <td>onmouseover</td>
              <td>Trigger the event when the mouse moves onto the element.</td>
            </tr>
            <tr>
              <td>onmouseup</td>
              <td>Trigger the event when the mouse button is released.</td>
            </tr>
        </table>
        <h1>Drag Events</h1>
        <table id='Drag'className='table1'border={1}>
            <tr>
              <th>Attribute</th>
              <th>Description</th>
            </tr>
            <tr>
              <td>ondrag</td>
              <td>Script to be run when an element is dragged</td>
            </tr>
            <tr>
              <td>ondragend</td>
              <td>Script to be run at the end of a drag operation</td>
            </tr>
            <tr>
              <td>ondragover</td>
              <td>Script to be run when an element is being dragged over a valid drop target</td>
            </tr>
            <tr>
              <td>ondragstart</td>
              <td>Script to be run at the start of a drag operation</td>
            </tr>
            <tr>
              <td>ondrop</td>
              <td>Script to be run when dragged element is being dropped</td>
            </tr>
            <tr>
              <td>onscroll</td>
              <td>Script to be run when an element's scrollbar is being scrolled</td>
            </tr>
        </table>
        <h1>Clipboard Event Attributes</h1>
        <table id='Clipboard'className='table1'border={1}>
            <tr>
              <th>Attribute</th>
              <th>Description</th>
            </tr>
            <tr>
              <td>oncopy</td>
              <td>Trigger the event when the user copies the content to the system clipboard.</td>
            </tr>
            <tr>
              <td>oncut</td>
              <td>Trigger the event when the content of an element is cut and copy to the clipboard.</td>
            </tr>
            <tr>
              <td>onpaste</td>
              <td>Trigger the event when the user pastes some content in an element.</td>
            </tr>
        </table>
        <h1>Media Event Attributes</h1>
        <table id='Media'className='table1' border={1}>
            <tr>
              <th>Attribute</th>
              <th>Description</th>
            </tr>
            <tr>
              <td>onabort	</td>
              <td>Executed the script when media playback is aborted.</td>
            </tr>
            <tr>
              <td>oncanplay</td>
              <td>Executed the script when the media file is ready to play.</td>
            </tr>
            <tr>
              <td>onerror</td>
              <td>Executed the script when some error occurred while fetching the media data.</td>
            </tr>
            <tr>
              <td>onpause</td>
              <td>Executed the script when media playback is paused.</td>
            </tr>
            <tr>
              <td>onplay	</td>
              <td>Executed the script when media file ready to play after being paused.</td>
            </tr>
            <tr>
              <td>onprogress	</td>
              <td>Executed the script when the browser is in the process of getting the media data.</td>
            </tr>
        </table>
        <h1>Misc Events</h1>
        <table id='Misc'className='table1' border={1}>
            <tr>
              <th>Attribute</th>
              <th>Description</th>
            </tr>
            <tr>
              <td>ontoggle</td>
              <td>Fires when the user opens or closes the details element</td>
            </tr>
        </table>
       
       </div>
  )
}

export default Content