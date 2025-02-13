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
    { name: 'RAJPURA JUNCTION', code: 'RPJ' },
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
    { name: 'AMRITSAR JUNCTION', code: 'ASR' },
];
let currentSelectionIndex = -1;

function filterStations(type) {
    const input = document.getElementById(type);
    const dropdown = document.getElementById(`${type}-dropdown`);
    const searchTerm = input.value.toLowerCase();
    dropdown.innerHTML = '';
    currentSelectionIndex = -1;
    const filteredStations = stations.filter(
        (station) =>
            station.name.toLowerCase().includes(searchTerm) ||
            station.code.toLowerCase().includes(searchTerm)
    );
    filteredStations.forEach((station) => {
        const div = document.createElement('div');
        div.textContent = `${station.name} (${station.code})`;
        div.onclick = () => selectStation(type, station.name);
        div.classList.add('dropdown-item');
        dropdown.appendChild(div);
    });
    dropdown.classList.toggle('show', filteredStations.length > 0);
}

function selectStation(type, station) {
    const input = document.getElementById(type);
    input.value = station;
    document.getElementById(`${type}-dropdown`).classList.remove('show');
    validateStationsImmediately();
}

function validateStationsImmediately() {
    const origin = document.getElementById('origin').value;
    const destination = document.getElementById('destination').value;
    if (origin && destination && origin === destination) {
        alert('Origin and Destination cannot be the same. Please select different stations.');
        document.getElementById('destination').value = '';
    }
}

function navigateDropdown(e, type) {
    const dropdown = document.getElementById(`${type}-dropdown`);
    const items = dropdown.querySelectorAll('.dropdown-item');
    if (items.length === 0) return;
    if (e.key === 'ArrowDown') {
        if (currentSelectionIndex < items.length - 1) {
            currentSelectionIndex++;
        }
    } else if (e.key === 'ArrowUp') {
        if (currentSelectionIndex > 0) {
            currentSelectionIndex--;
        }
    } else if (e.key === 'Enter') {
        if (currentSelectionIndex !== -1) {
            selectStation(type, items[currentSelectionIndex].textContent.split(' (')[0]);
            e.preventDefault();
        }
    }
    items.forEach((item, index) => {
        if (index === currentSelectionIndex) {
            item.classList.add('highlighted');
        } else {
            item.classList.remove('highlighted');
        }
    });
}

function setMinDate() {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
    document.getElementById('date').setAttribute('min', `${yyyy}-${mm}-${dd}`);
}

function updateClasses() {
    const trainSelect = document.getElementById('Train');
    const classSelect = document.getElementById('Class');
    classSelect.innerHTML = '<option value="">Choose Class</option>';
    const selectedTrain = trainSelect.options[trainSelect.selectedIndex];
    const classes = selectedTrain.getAttribute('data-classes');
    if (classes) {
        classes.split(',').forEach((trainClass) => {
            const option = document.createElement('option');
            option.value = trainClass;
            option.textContent = trainClass;
            classSelect.appendChild(option);
        });
    }
}

document.getElementById('Train').addEventListener('change', updateClasses);
document.getElementById('origin').addEventListener('input', () => filterStations('origin'));
document.getElementById('destination').addEventListener('input', () => filterStations('destination'));
document.addEventListener('keydown', (e) => {
    if (e.target.classList.contains('search-input')) {
        navigateDropdown(e, e.target.id);
    }
});

document.addEventListener('click', (e) => {
    document.querySelectorAll('.search-dropdown').forEach((dropdown) => {
        if (!dropdown.parentElement.contains(e.target)) {
            dropdown.classList.remove('show');
        }
    });
});

window.onload = setMinDate;
