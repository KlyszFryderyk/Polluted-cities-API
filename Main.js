const get = () => {
    const name = $('#country').val();
    const value = name.toLowerCase();

    if (value === 'poland') {
        localStorage.setItem('country', "Poland");
        fetch('https://api.openaq.org/v1/latest?country=PL&limit=100&parameter=pm25&order_by=measurements.value&sort=desc')
            .then(res => res.json())
            .then(posts => {
                const arr = new Array();
                for (let i = 0; i < posts.results.length; i++) {
                    arr.push(posts.results[i].city)
                }
                const arr1 = [...new Set([...arr])]
                const arr2 = arr1.slice(0, 10)
                const content = new Array();
                const promises = arr2.map(cit => fetch(`https://en.wikipedia.org/w/api.php?action=opensearch&format=json&origin=*&search=${cit}`).then(y => y.json()));
                Promise.all(promises).then(city => {
                    for (let i = 0; i < arr2.length; i++) {
                        content.push(city[i][2][0])
                    }
                    const result = {};
                    arr2.forEach((city, i) => result[city] = content[i]);

                    let output = `<div class="ui container">
                                    <div class="ui styled accordion">`;
                    Object.keys(result).forEach((key) => {
                        output +=
                            `
                            <div class="title">
                                <i class="dropdown icon"></i>
                                    ${key}
                            </div>
                            <div class="content">
                                    ${result[key]}
                            </div>
                            `;
                    });
                    output += `</div>
                            </div>`
                    localStorage.setItem('out', output);
                    $('#accord').html(output);
                    $('.ui.accordion').accordion();
                })

            });

    } else if (value === 'germany') {
        localStorage.setItem('country', "Germany");
        fetch('https://api.openaq.org/v1/latest?country=DE&limit=100&parameter=pm25&order_by=measurements.value&sort=desc')
            .then(res => res.json())
            .then(posts => {
                const arr = new Array();
                for (let i = 0; i < posts.results.length; i++) {
                    arr.push(posts.results[i].city)
                }
                const arr1 = [...new Set([...arr])]
                const arr2 = arr1.slice(0, 10)
                const content = new Array();
                const promises = arr2.map(cit => fetch(`https://en.wikipedia.org/w/api.php?action=opensearch&format=json&origin=*&search=${cit}`).then(y => y.json()));
                Promise.all(promises).then(city => {
                    for (let i = 0; i < arr2.length; i++) {
                        content.push(city[i][2][0])
                    }
                    const result = {};
                    arr2.forEach((city, i) => result[city] = content[i]);

                    let output = `<div class="ui container">
                                    <div class="ui styled accordion">`;
                    Object.keys(result).forEach((key) => {
                        output +=
                            `
                            <div class="title">
                                <i class="dropdown icon"></i>
                                    ${key}
                            </div>
                            <div class="content">
                                    ${result[key]}
                            </div>
                            `;
                    });
                    output += `</div>
                            </div>`
                    localStorage.setItem('out', output);
                    $('#accord').html(output);
                    $('.ui.accordion').accordion();
                })

            });

    } else if (value === 'spain') {
        localStorage.setItem('country', "Spain");
        fetch('https://api.openaq.org/v1/latest?country=ES&limit=100&parameter=pm25&order_by=measurements.value&sort=desc')
            .then(res => res.json())
            .then(posts => {
                const arr = new Array();
                for (let i = 0; i < posts.results.length; i++) {
                    arr.push(posts.results[i].city)
                }
                const arr1 = [...new Set([...arr])]
                const arr2 = arr1.slice(0, 10)
                const content = new Array();
                const promises = arr2.map(cit => fetch(`https://en.wikipedia.org/w/api.php?action=opensearch&format=json&origin=*&search=${cit}`).then(y => y.json()));
                Promise.all(promises).then(city => {
                    for (let i = 0; i < arr2.length; i++) {
                        content.push(city[i][2][0])
                    }
                    const result = {};
                    arr2.forEach((city, i) => result[city] = content[i]);

                    let output = `<div class="ui container">
                                    <div class="ui styled accordion">`;
                    Object.keys(result).forEach((key) => {
                        output +=
                            `
                            <div class="title">
                                <i class="dropdown icon"></i>
                                    ${key}
                            </div>
                            <div class="content">
                                    ${result[key]}
                            </div>
                            `;
                    });
                    output += `</div>
                            </div>`
                    localStorage.setItem('out', output);
                    $('#accord').html(output);
                    $('.ui.accordion').accordion();
                })

            });

    } else if (value === 'france') {
        localStorage.setItem('country', "France");
        fetch('https://api.openaq.org/v1/latest?country=FR&limit=100&parameter=pm25&order_by=measurements.value&sort=desc')
            .then(res => res.json())
            .then(posts => {
                const arr = new Array();
                for (let i = 0; i < posts.results.length; i++) {
                    arr.push(posts.results[i].city)
                }
                const arr1 = [...new Set([...arr])]
                const arr2 = arr1.slice(0, 10)
                const content = new Array();
                const promises = arr2.map(cit => fetch(`https://en.wikipedia.org/w/api.php?action=opensearch&format=json&origin=*&search=${cit}`).then(y => y.json()));
                Promise.all(promises).then(city => {
                    for (let i = 0; i < arr2.length; i++) {
                        content.push(city[i][2][0])
                    }
                    const result = {};
                    arr2.forEach((city, i) => result[city] = content[i]);

                    let output = `<div class="ui container">
                                    <div class="ui styled accordion">`;
                    Object.keys(result).forEach((key) => {
                        output +=
                            `
                            <div class="title">
                                <i class="dropdown icon"></i>
                                    ${key}
                            </div>
                            <div class="content">
                                    ${result[key]}
                            </div>
                            `;
                    });
                    output += `</div>
                            </div>`
                    localStorage.setItem('out', output);
                    $('#accord').html(output);
                    $('.ui.accordion').accordion();
                })
            });

    } else {
        localStorage.setItem('country', '');
        localStorage.setItem('out', '');
        $('#country').val('');
        $('#accord').html('');
        alert('Wrong name of country!!!')
    }
}

window.onload = () => {
    let name = localStorage.getItem("out");
    let country = localStorage.getItem("country");
    $('#country').val(country);
    if (name !== null) {
        $('#accord').html(name);
        $('.ui.accordion').accordion();
    }
};

$(document).ready(() => {
    enter = (event) => {
        const x = event.keyCode;
        if (x === 13) get();
    }
    $('#fetch').click(get);
})
