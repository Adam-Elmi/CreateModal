# CreateModal - Noble Tools

This tool, one of Noble Tools, helps you create customizable modals for your website.

## How to Use

Basic syntax:

```javascript
createModal({
    title: String,
    content: String,
    actions: Array,
    theme: String,
    onClose: Function,
    onOpen: Function,
    onSubmit: Function,
    customStyles: Object
});
```


## Parameters

- `title`: The heading of your modal (default: 'Modal Title')
- `content`: The main text in your modal (default: 'Modal Content')
- `actions`: Buttons at the bottom of the modal
- `theme`: Color scheme ('light', 'dark', 'dark-purple', 'light-blue')
- `onClose`: Function to run when modal closes
- `onOpen`: Function to run when modal opens
- `onSubmit`: Function to run on form submission
- `customStyles`: Custom CSS styles for modal parts

## Examples

1. Basic modal:

```javascript
createModal({
    title: 'Welcome',
    content: 'Thanks for visiting our site!',
    actions: [
        { text: 'Close', type: 'secondary', onClick: () => console.log('Closed') }
    ]
});
```


2. Modal with multiple actions:

```javascript
createModal({
    title: 'Confirm Action',
    content: 'Are you sure you want to delete this item?',
    actions: [
        { text: 'Cancel', type: 'secondary', onClick: () => console.log('Cancelled') },
        { text: 'Delete', type: 'primary', onClick: () => console.log('Deleted') }
    ],
    theme: 'dark'
});
```


3. Modal with custom styles and events:

```javascript
createModal({
    title: 'Subscribe',
    content: 'Join our newsletter for updates!',
    actions: [
        { text: 'Subscribe', type: 'primary', onClick: () => console.log('Subscribed') }
    ],
    theme: 'light-blue',
    onOpen: () => console.log('Modal opened'),
    onClose: () => console.log('Modal closed'),
    customStyles: {
        header: 'background-color: #e0f7fa;',
        body: 'font-size: 18px;'
    }
});
```




