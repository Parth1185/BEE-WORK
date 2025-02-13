// Array of stations with both names and codes
const stations = [
    { name: 'MUMBAI CENTRAL', code: 'BCT' },
    { name: 'NEW DELHI', code: 'NDLS' },
    { name: 'CHENNAI CENTRAL', code: 'MAS' },
    { name: 'BANGALORE CITY', code: 'SBC' },
    { name: 'KOLKATA CHARBAGH', code: 'HWH' },
    { name: 'HYDERABAD DECCAN', code: 'HYB' },
    { name: 'PUNE', code: 'PUNE' },
    { name: 'AHMEDABAD JUNCTION', code: 'ADI' },
    { name: 'JAIPUR', code: 'JP' },
    { name: 'LUCKNOW CHARBAGH', code: 'LKO' },
    { name: 'BHOPAL JN', code: 'BPL' },
    { name: 'NAGPUR CENTRAL', code: 'NGP' },
    { name: 'PATNA', code: 'PNBE' },
    { name: 'KANPUR CENTRAL', code: 'CNB' },
    { name: 'VADODARA', code: 'BRC' },
    { name: 'SURAT', code: 'ST' },
    { name: 'INDORE', code: 'INDB' },
    { name: 'COIMBATORE', code: 'CBE' },
    { name: 'AMBALA CANTT', code: 'UMB' },
    { name: 'CHANDIGARH JUNCTION', code: 'CDG' },
    { name: 'GUWAHATI', code: 'GHY' },
    { name: 'AGRA CANTT', code: 'AGC' },
    { name: 'JAMMU TAWI', code: 'JAT' },
    { name: 'VARANASI', code: 'BSB' },
    { name: 'SHRI MATA VAISHNO DEVI KATRA', code: 'SVDK' },
    { name: 'LUDHIANA JUNCTION', code: 'LDH' },
    { name: 'AMRITSAR JUNCTION', code: 'ASR' }
];

let currentSelectionIndex = -1; // To track the highlighted index in the dropdown
let filteredStations = []; // To store the current filtered stations

// Function to filter stations based on the input
function filterStations(type) {
    const input = document.getElementById(type);
    const dropdown = document.getElementById(`${type}-dropdown`);
    const searchTerm = input.value.toLowerCase();

    // Clear previous dropdown items
    dropdown.innerHTML = '';

    // Filter stations based on the search term (matching either name or code)
    filteredStations = stations.filter(station =>
        station.name.toLowerCase().includes(searchTerm) || station.code.toLowerCase().includes(searchTerm)
    );

    // Display filtered results with both name and code
    filteredStations.forEach((station) => {
        const div = document.createElement('div');
        div.textContent = `${station.name} (${station.code})`; // Display both name and code
        div.onclick = () => selectStation(type, station); // Pass the station directly
        div.classList.add('dropdown-item');
        dropdown.appendChild(div);
    });

    // Show the dropdown if there are results
    dropdown.classList.toggle('show', filteredStations.length > 0);

    // Reset the selection index
    currentSelectionIndex = -1;
}

// Function to select a station from the dropdown
function selectStation(type, station) {
    const input = document.getElementById(type);
    const codeInput = document.getElementById(`${type}-code`);
    const otherType = type === 'origin' ? 'destination' : 'origin';
    const otherCodeInput = document.getElementById(`${otherType}-code`);

    // Validate that source and destination are not the same
    if (station.code === otherCodeInput.value) {
        alert('Source and destination cannot be the same. Please select a different station.');
        input.value = ''; // Clear the input field
        codeInput.value = ''; // Clear the code input
        return;
    }

    console.log(`Selected Station: ${station.name} (${station.code})`); // Debug log
    input.value = station.name; // Set the name of the station in the input field
    codeInput.value = station.code; // Set the station code in the hidden input
    document.getElementById(`${type}-dropdown`).classList.remove('show');
    filteredStations = []; // Clear the filtered list
    currentSelectionIndex = -1; // Reset index
}

// Function to navigate through the dropdown using keyboard
function navigateDropdown(e, type) {
    const dropdown = document.getElementById(`${type}-dropdown`);
    const items = dropdown.querySelectorAll('.dropdown-item');
    if (items.length === 0) return;

    if (e.key === 'ArrowDown') {
        currentSelectionIndex = Math.min(currentSelectionIndex + 1, items.length - 1);
    } else if (e.key === 'ArrowUp') {
        currentSelectionIndex = Math.max(currentSelectionIndex - 1, 0);
    } else if (e.key === 'Enter' && currentSelectionIndex !== -1) {
        const selectedStation = filteredStations[currentSelectionIndex];
        selectStation(type, selectedStation);
        e.preventDefault();
        return;
    }

    // Highlight the current selection
    items.forEach((item, index) => {
        if (index === currentSelectionIndex) {
            item.classList.add('highlighted'); // Add highlighted style
        } else {
            item.classList.remove('highlighted'); // Remove highlighted style
        }
    });
}

// Event listener for key navigation (Arrow keys and Enter key)
document.addEventListener('keydown', (e) => {
    if (e.target.classList.contains('search-input')) {
        const type = e.target.id;
        navigateDropdown(e, type);
    }
});

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.search-container')) {
        document.querySelectorAll('.search-dropdown').forEach(dropdown => dropdown.classList.remove('show'));
    }
});

// Function to update class options based on the selected train
function updateClasses() {
    const trainSelect = document.getElementById('Train');
    const selectedTrain = trainSelect.options[trainSelect.selectedIndex];
    const classSelect = document.getElementById('Class');
    const classes = selectedTrain.getAttribute('data-classes');

    classSelect.innerHTML = '<option value="">Choose Class</option>';

    if (classes) {
        const classList = classes.split(',');
        classList.forEach(className => {
            const option = document.createElement('option');
            option.value = className;
            option.textContent = className;
            classSelect.appendChild(option);
        });
    }
}
function validateDate() {
    const dateInput = document.getElementById('date');
    const dateError = document.getElementById('date-error');
    const today = new Date();
    const todayISO = today.toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format

    // Set the minimum date to today
    dateInput.setAttribute('min', todayISO);

    // Event listener to check the selected date
    dateInput.addEventListener('change', () => {
        const selectedDate = new Date(dateInput.value);
        if (selectedDate < today) {
            dateError.style.display = 'inline';
            dateInput.value = ''; // Clear the invalid input
        } else {
            dateError.style.display = 'none';
        }
    });
}


// Call the validation function on page load
window.onload = () => {
    validateDate();
};
