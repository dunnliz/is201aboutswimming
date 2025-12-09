function calculatePace() {
    // 1. Get input values
    const minutesInput = document.getElementById('minutes');
    const secondsInput = document.getElementById('seconds');
    const distanceInput = document.getElementById('distance');
    const resultDiv = document.getElementById('result');

    // 2. Validate inputs
    const minutes = parseInt(minutesInput.value) || 0;
    const seconds = parseInt(secondsInput.value) || 0;
    const distance = parseInt(distanceInput.value);

    if (!distance || distance <= 0) {
        resultDiv.textContent = 'Please enter a valid distance.';
        resultDiv.style.display = 'block';
        return;
    }

    // 3. Calculation logic
    const totalSeconds = (minutes * 60) + seconds;
    const secondsPerMeter = totalSeconds / distance;
    const secondsPer100m = secondsPerMeter * 100;

    // Convert total 100m pace seconds back into minutes and remaining seconds
    const paceMinutes = Math.floor(secondsPer100m / 60);
    const paceSeconds = Math.round(secondsPer100m % 60);

    // 4. Display the result
    // Format seconds to always show two digits (e.g., 05 instead of 5)
    const formattedPaceSeconds = paceSeconds < 10 ? '0' + paceSeconds : paceSeconds;

    resultDiv.textContent = `Your pace is ${paceMinutes}:${formattedPaceSeconds} per 100m.`;
    resultDiv.style.display = 'block';
}