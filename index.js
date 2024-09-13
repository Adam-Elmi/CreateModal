function createModal(
    {
        title = 'Modal Title',
        content = 'Modal Content',
        actions = [],
        onClose = () => {},
        onOpen = () => {},
        onSubmit = () => {},
        theme = 'light',
        customStyles = {}
    }
) {
    function addStyles() {
        const styles = `
            .custom-modal {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 1000;
                opacity: 1;
                transition: opacity 0.3s ease-out;
            }

            .custom-modal-overlay {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                backdrop-filter: blur(5px);
                transition: opacity 0.3s ease-out;
            }

            .custom-modal-container {
                border-radius: 8px;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                width: 90%;
                max-width: 500px;
                z-index: 1001;
                overflow: hidden;
                opacity: 1;
                transform: scale(1);
                transition: opacity 0.3s ease-out, transform 0.3s ease-out;
            }

            .custom-modal-closing {
                opacity: 0;
            }

            .custom-modal-closing .custom-modal-overlay {
                opacity: 0;
            }

            .custom-modal-closing .custom-modal-container {
                opacity: 0;
                transform: scale(0.9);
            }

            .custom-modal-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 20px;
            }

            .custom-modal-header h2 {
                margin: 0;
                font-size: 1.5rem;
            }

            .custom-modal-close {
                background: none;
                border: none;
                font-size: 1.5rem;
                cursor: pointer;
            }

            .custom-modal-body {
                padding: 20px;
            }

            .custom-modal-footer {
                display: flex;
                justify-content: flex-end;
                padding: 20px;
            }

            .custom-modal-btn {
                padding: 10px 20px;
                margin-left: 10px;
                border: none;
                border-radius: 4px;
                cursor: pointer;
                font-weight: bold;
                transition: background-color 0.2s;
            }

            .custom-modal-btn:hover {
                opacity: 0.9;
            }

            @keyframes modalOpen {
                from {
                    opacity: 0;
                    transform: scale(0.9);
                }
                to {
                    opacity: 1;
                    transform: scale(1);
                }
            }

            /* Light theme (default) */
            .custom-modal-light .custom-modal-overlay {
                background-color: rgba(0, 0, 0, 0.5) !important;
            }
            .custom-modal-light .custom-modal-container {
                background: linear-gradient(135deg, #ffffff, #f0f0f0) !important;
            }
            .custom-modal-light .custom-modal-header {
                background: linear-gradient(135deg, #f8f9fa, #e9ecef) !important;
                border-bottom: 1px solid #e9ecef !important;
            }
            .custom-modal-light .custom-modal-header h2 {
                color: #343a40;
            }
            .custom-modal-light .custom-modal-close {
                color: #6c757d;
            }
            .custom-modal-light .custom-modal-body {
                color: #495057;
            }
            .custom-modal-light .custom-modal-footer {
                background: linear-gradient(135deg, #f8f9fa, #e9ecef) !important;
                border-top: 1px solid #e9ecef !important;
            }
            .custom-modal-light .custom-modal-btn-primary {
                background: linear-gradient(135deg, #007bff, #0056b3);
                color: #ffffff;
            }
            .custom-modal-light .custom-modal-btn-secondary {
                background: linear-gradient(135deg, #6c757d, #495057);
                color: #ffffff;
            }

            /* Dark theme */
            .custom-modal-dark .custom-modal-overlay {
                background-color: rgba(0, 0, 0, 0.7) !important;
            }
            .custom-modal-dark .custom-modal-container {
                background: linear-gradient(135deg, #333333, #222222) !important;
            }
            .custom-modal-dark .custom-modal-header {
                background: linear-gradient(135deg, #444444, #333333) !important;
                border-bottom: 1px solid #555555 !important;
            }
            .custom-modal-dark .custom-modal-header h2 {
                color: #ffffff;
            }
            .custom-modal-dark .custom-modal-close {
                color: #aaaaaa;
            }
            .custom-modal-dark .custom-modal-body {
                color: #dddddd;
            }
            .custom-modal-dark .custom-modal-footer {
                background: linear-gradient(135deg, #444444, #333333) !important;
                border-top: 1px solid #555555 !important;
            }
            .custom-modal-dark .custom-modal-btn-primary {
                background: linear-gradient(135deg, #0056b3, #003d80);
                color: #ffffff;
            }
            .custom-modal-dark .custom-modal-btn-secondary {
                background: linear-gradient(135deg, #5a6268, #424a52);
                color: #ffffff;
            }

            /* Dark purple theme */
            .custom-modal-dark-purple .custom-modal-overlay {
                background-color: rgba(0, 0, 0, 0.7) !important;
            }
            .custom-modal-dark-purple .custom-modal-container {
                background: linear-gradient(135deg, #2c2c54, #1f1f3d) !important;
            }
            .custom-modal-dark-purple .custom-modal-header {
                background: linear-gradient(135deg, #474787, #3c3c73) !important;
                border-bottom: 1px solid #6c6c9c !important;
            }
            .custom-modal-dark-purple .custom-modal-header h2 {
                color: #ffffff;
            }
            .custom-modal-dark-purple .custom-modal-close {
                color: #aaaaaa;
            }
            .custom-modal-dark-purple .custom-modal-body {
                color: #dddddd;
            }
            .custom-modal-dark-purple .custom-modal-footer {
                background: linear-gradient(135deg, #474787, #3c3c73) !important;
                border-top: 1px solid #6c6c9c !important;
            }
            .custom-modal-dark-purple .custom-modal-btn-primary {
                background: linear-gradient(135deg, #9980FA, #7f66e6);
                color: #ffffff;
            }
            .custom-modal-dark-purple .custom-modal-btn-secondary {
                background: linear-gradient(135deg, #5758BB, #4647a3);
                color: #ffffff;
            }

            /* Light blue theme */
            .custom-modal-light-blue .custom-modal-overlay {
                background-color: rgba(0, 0, 0, 0.5) !important;
            }
            .custom-modal-light-blue .custom-modal-container {
                background: linear-gradient(135deg, #e3f2fd, #bbdefb) !important;
            }
            .custom-modal-light-blue .custom-modal-header {
                background: linear-gradient(135deg, #bbdefb, #90caf9) !important;
                border-bottom: 1px solid #90caf9 !important;
            }
            .custom-modal-light-blue .custom-modal-header h2 {
                color: #1565c0;
            }
            .custom-modal-light-blue .custom-modal-close {
                color: #1976d2;
            }
            .custom-modal-light-blue .custom-modal-body {
                color: #0d47a1;
            }
            .custom-modal-light-blue .custom-modal-footer {
                background: linear-gradient(135deg, #bbdefb, #90caf9) !important;
                border-top: 1px solid #90caf9 !important;
            }
            .custom-modal-light-blue .custom-modal-btn-primary {
                background: linear-gradient(135deg, #2196f3, #1976d2);
                color: #ffffff;
            }
            .custom-modal-light-blue .custom-modal-btn-secondary {
                background: linear-gradient(135deg, #64b5f6, #42a5f5);
                color: #ffffff;
            }

            /* None theme */
            .custom-modal-none .custom-modal-overlay,
            .custom-modal-none .custom-modal-container,
            .custom-modal-none .custom-modal-header,
            .custom-modal-none .custom-modal-body,
            .custom-modal-none .custom-modal-footer {
                background: none !important;
                background-color: transparent !important;
            }

            /* Custom styles with higher specificity */
            .custom-modal .custom-modal-container[style],
            .custom-modal .custom-modal-header[style],
            .custom-modal .custom-modal-body[style],
            .custom-modal .custom-modal-footer[style] {
                background: none !important;
                background-color: transparent !important;
            }
        `;

        const styleElement = document.createElement('style');
        styleElement.textContent = styles;
        document.head.appendChild(styleElement);
    }

    function createModalElement() {
        const modal = document.createElement('div');
        modal.className = `custom-modal custom-modal-${theme}`;
        modal.innerHTML = `
            <div class="custom-modal-overlay" style="${customStyles.overlay || ''}"></div>
            <div class="custom-modal-container" style="${customStyles.container || ''}">
                <div class="custom-modal-header" style="${customStyles.header || ''}">
                    <h2>${title}</h2>
                    <button class="custom-modal-close">&times;</button>
                </div>
                <div class="custom-modal-body" style="${customStyles.body || ''}">
                    <p>${content}</p>
                </div>
                <div class="custom-modal-footer" style="${customStyles.footer || ''}">
                    ${actions.map(action => `
                        <button class="custom-modal-btn custom-modal-btn-${action.type}" 
                                style="${customStyles.btn || ''}${action.style ? action.style : ''}">${action.text}</button>
                    `).join('')}
                </div>
            </div>
        `;
        return modal;
    }

    function closeModal() {
        modal.classList.add('custom-modal-closing');
        setTimeout(() => {
            document.body.removeChild(modal);
        }, 300);
    }

    function hideModal() {
        modal.style.display = 'none';
    }

    function showModal() {
        modal.style.display = 'flex';
    }

    function addEventListeners() {
        modal.querySelector('.custom-modal-close').addEventListener('click', () => {
            closeModal();
            onClose();
        });

        modal.querySelector('.custom-modal-overlay').addEventListener('click', () => {
            closeModal();
            onClose();
        });

        actions.forEach((action, index) => {
            modal.querySelectorAll('.custom-modal-btn')[index].addEventListener('click', () => {
                if (action.type === 'submit') {
                    onSubmit();
                }
                action.onClick();
            });
        });
    }

    addStyles();
    const modal = createModalElement();
    addEventListeners();
    document.body.appendChild(modal);
    onOpen();

    return {
        header: modal.querySelector('.custom-modal-header'),
        body: modal.querySelector('.custom-modal-body'),
        footer: modal.querySelector('.custom-modal-footer'),
        close: closeModal,
        hide: hideModal,
        show: showModal
    };
}
