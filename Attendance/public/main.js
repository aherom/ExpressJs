document.getElementById('attendanceForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const date = document.getElementById('Date').value;
    const response = await fetch('/fechdata', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ Date: date })
    });

    const attendanceResult = document.getElementById('attendanceResult');
    attendanceResult.innerHTML = '';

    if (response.ok) {
        const data = await response.json();

        if (data.message) {
            attendanceResult.innerHTML = `<p>${data.message}</p>`;
            const form = document.createElement('form');
            form.id = 'markAttendanceForm';

            data.students.forEach(student => {
                const studentDiv = document.createElement('div');
                studentDiv.innerHTML = `
                    <label>${student.student_name}:</label>
                    <input type="radio" name="attendance_${student.student_id}" value="present" required> Present
                    <input type="radio" name="attendance_${student.student_id}" value="absent" required> Absent
                `;
                form.appendChild(studentDiv);
            });

            const submitButton = document.createElement('button');
            submitButton.type = 'submit';
            submitButton.textContent = 'Submit Attendance';
            form.appendChild(submitButton);

            attendanceResult.appendChild(form);

            form.addEventListener('submit', async (e) => {
                e.preventDefault();

                const attendanceData = Array.from(form.elements)
                    .filter(el => el.name.startsWith('attendance_'))
                    .map(el => {
                        const student_id = el.name.split('_')[1];
                        const attendance_status = el.checked ? el.value : null;
                        return { student_id, attendance_status };
                    }).filter(record => record.attendance_status);

                await fetch('/submitAttendance', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ date, attendance: attendanceData })
                });

                alert('Attendance marked successfully');
            });
        } else {
            data.forEach(record => {
                attendanceResult.innerHTML += `<p>${record.student_id}: ${record.attendance_status}</p>`;
            });
        }
    } else {
        attendanceResult.innerHTML = '<p>Error fetching attendance data.</p>';
    }
});
