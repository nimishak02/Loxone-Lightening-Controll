async function toggleLighting() {
    const miniserverAddress = document.getElementById('miniserverAddress').value;
    const controllerName = document.getElementById('controllerName').value;
    const iconFile = document.getElementById('iconUpload').files[0];

    if (!miniserverAddress || !controllerName || !iconFile) {
        alert('Please fill in all the fields.');
        return;
    }

    const formData = new FormData();
    formData.append('miniserverAddress', miniserverAddress);
    formData.append('controllerName', controllerName);
    formData.append('icon', iconFile);

    try {
        const response = await fetch('https://www.loxone.com/enen/kb/api/', {
            method: 'POST',
            body: formData,
        });

        const result = await response.json();

        if (result.success) {
            alert('Lighting toggled successfully!');
        } else {
            alert('Failed to toggle lighting. Please try again.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again later.');
    }
}