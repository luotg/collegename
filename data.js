//const api = "http://luocollegedegree.kesug.com/project.json";
const api="project.json"

const header = document.getElementById('header-main');
header.innerHTML = getHeader();

const footer = document.getElementById('footer-main');
footer.innerHTML = getFooter();

function getHeader() {
    return `
        <header>
            <h1 id="title">Come to See My College Degree</h1> 
        </header>
    `;
}

function getFooter() {
    return `
        <footer>
            <p>&copy;2023 Tiangang Luo</p>
        </footer>
    `;
}

async function fetchData() {
    try {
        const res = await fetch(api);
        const data = await res.json();
        const div = document.getElementById('result');
        div.innerHTML = buildDegreesList(data);

    } catch (err) {
        console.log(err);
    }
}

document.getElementById('fetchButton').addEventListener('click', fetchData);

function buildDegreesList(data) {
    const collegeList = data.collegeDegrees.map(college => {
        return `
        <div class="item">
            <dt>
                <strong>School Name: </strong>${college.school}</strong>
            </dt>
            <dd>
                <strong>Major:</strong> ${college.programMajor}
            </dd>
            <dd>
                <strong>Degree Type:</strong> ${college.type}
            </dd>
            <dd>
                <Strong>Degree Earned or Expected Date Earned: </strong>${college.yearConferred}
            </dd>
        </div>
        `;
    });

    return `
    <dl class="data">
        ${collegeList.join('')}
    </dl>
    `;
}