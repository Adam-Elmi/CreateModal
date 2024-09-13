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
    customStyles: Object,
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

### How to use custom styles
- Use !important to override default styles
- Make theme 'none' to use custom styles

```javascript
createModal({
    title: 'Custom Styles',
    content: 'This is a custom modal with custom styles.',
    actions: [
        { text: 'Close', type: 'secondary', onClick: () => console.log('Closed') }
    ],
    theme: 'none',
    customStyles: {
        container: 'background-color: #f0f0f0 !important;',
        header: 'background-color: #e0e0e0 !important;',
        body: 'background-color: #ffffff !important;',
        footer: 'background-color: #e0e0e0 !important;',
    }
});
```

### To use custom styles for buttons

```javascript
createModal({
    title: 'Custom Styles',
    content: 'This is a custom modal with custom styles.',
    actions: [
        { text: 'Close', type: 'secondary', onClick: () => console.log('Closed') }
    ],    
    customStyles: {
        btn: 'background-color: red !important;'
    }
});
```
    or

### Use style property to add custom styles to the buttons

```javascript
createModal({
    title: 'Custom Styles',
    content: 'This is a custom modal with custom styles.',
    actions: [
        { 
            text: 'Close', 
            type: 'secondary', 
            onClick: () => console.log('Closed'),
            style: 'background-color: red !important;'
        },
        
    ],    
    
});
```
### How to give custom styles to overlay
- Use !important to override default styles
```javascript
createModal({
    title: 'Custom Styles',
    content: 'This is a custom modal with custom styles.',
    actions: [
        { text: 'Close', type: 'secondary', onClick: () => console.log('Closed') }
    ],    
    customStyles: {
        overlay: 'background-color: rgba(0, 0, 0, 0.5) !important;'
    }
});
```
