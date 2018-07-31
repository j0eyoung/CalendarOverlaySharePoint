# ColorCalSharePoint2013

Have you ever tried to more than 9 calendar overlays on a SharePoint Calendar list?

I have been able to come up with a solution to changing the bland shades of blue SharePoint overlays OOTB, and allow the user to far exceed the limit of 9 overlays.

## How to use it

Upload files to *Site Assets* folder on the SharePoint site you wish to create these dynamic overlays.

Create two lists:

- *Calendar list* with name of your choice
- Custom list - Typically name this list "*Lookup_EventType*"

Lookup_EventType columns

- *Title* (Built in)
- *Color* - Single Line of Text

Add Lookup column to *Calendar list* with the lookup list being *Lookup_EventType* and using the *Title* as the displayed selector, and name for this demo the column is named *EventType*.

Edit Page of the New/Edit forms of the *Lookup_EventType* list,and add a Content Editor web part to the pages and link it to the `ColorPicker.html` file put in the *Site Assets* folder of the site during the first step.

Edit Page of the New/Edit forms of the *Calendar list*, and add a Content Editor web part to the pages and link it to the `Concat_Title_EventType.js` file put in the *Site Assets* folder of the site during the first step.

Edit Page of the calendar view of the *Calendar list*, or any page the calendar view is present on and add a Content Editor web part. Link the `Calendar_ColorCoding.html` to the previously added Content Editor.

If you are adding this functionality to an existing list then you somehow concat the *EventType* column to the end of the *Title* in mass. There are multiple was of doing this but I find using SharePoint Workflows works the best. You may also choose to go through and edit all the items one by one. 

Tested with Sharepoint 2013 On-Premise and O365, and with last versions of Firefox, Chrome, and IE11.



