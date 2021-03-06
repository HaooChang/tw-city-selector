(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
        typeof define === 'function' && define.amd ? define(factory) :
            (global.TwCitySelector = factory());
}(this, (function () { 'use strict';

    var data$1 = {
        // 縣市
        counties: ['臺北市', '基隆市', '新北市', '宜蘭縣', '桃園市', '新竹市', '新竹縣', '苗栗縣', '臺中市', '彰化縣', '南投縣', '嘉義市', '嘉義縣', '雲林縣', '臺南市', '高雄市', '澎湖縣', '金門縣', '屏東縣', '臺東縣', '花蓮縣', '連江縣'],

        // 區域
        districts: [
            // 臺北市
            [['中正區', '大同區', '中山區', '松山區', '大安區', '萬華區', '信義區', '士林區', '北投區', '內湖區', '南港區', '文山區'], ['100', '103', '104', '105', '106', '108', '110', '111', '112', '114', '115', '116']],
            // 基隆市
            [['仁愛區', '信義區', '中正區', '中山區', '安樂區', '暖暖區', '七堵區'], ['200', '201', '202', '203', '204', '205', '206']],
            // 新北市
            [['萬里區', '金山區', '板橋區', '汐止區', '深坑區', '石碇區', '瑞芳區', '平溪區', '雙溪區', '貢寮區', '新店區', '坪林區', '烏來區', '永和區', '中和區', '土城區', '三峽區', '樹林區', '鶯歌區', '三重區', '新莊區', '泰山區', '林口區', '蘆洲區', '五股區', '八里區', '淡水區', '三芝區', '石門區'], ['207', '208', '220', '221', '222', '223', '224', '226', '227', '228', '231', '232', '233', '234', '235', '236', '237', '238', '239', '241', '242', '243', '244', '247', '248', '249', '251', '252', '253']],
            // 宜蘭縣
            [['宜蘭市', '頭城鎮', '礁溪鄉', '壯圍鄉', '員山鄉', '羅東鎮', '三星鄉', '大同鄉', '五結鄉', '冬山鄉', '蘇澳鎮', '南澳鄉', '釣魚臺'], ['260', '261', '262', '263', '264', '265', '266', '267', '268', '269', '270', '272', '290']],
            // 桃園市
            [['中壢區', '平鎮區', '龍潭區', '楊梅區', '新屋區', '觀音區', '桃園區', '龜山區', '八德區', '大溪區', '復興區', '大園區', '蘆竹區'], ['320', '324', '325', '326', '327', '328', '330', '333', '334', '335', '336', '337', '338']],
            // 新竹市
            [['東區', '北區', '香山區'], ['300', '300', '300']],
            // 新竹縣
            [['竹北市', '湖口鄉', '新豐鄉', '新埔鎮', '關西鎮', '芎林鄉', '寶山鄉', '竹東鎮', '五峰鄉', '橫山鄉', '尖石鄉', '北埔鄉', '峨眉鄉'], ['302', '303', '304', '305', '306', '307', '308', '310', '311', '312', '313', '314', '315']],
            // 苗栗縣
            [['竹南鎮', '頭份市', '三灣鄉', '南庄鄉', '獅潭鄉', '後龍鎮', '通霄鎮', '苑裡鎮', '苗栗市', '造橋鄉', '頭屋鄉', '公館鄉', '大湖鄉', '泰安鄉', '銅鑼鄉', '三義鄉', '西湖鄉', '卓蘭鎮'], ['350', '351', '352', '353', '354', '356', '357', '358', '360', '361', '362', '363', '364', '365', '366', '367', '368', '369']],
            // 臺中市
            [['中區', '東區', '南區', '西區', '北區', '北屯區', '西屯區', '南屯區', '太平區', '大里區', '霧峰區', '烏日區', '豐原區', '后里區', '石岡區', '東勢區', '和平區', '新社區', '潭子區', '大雅區', '神岡區', '大肚區', '沙鹿區', '龍井區', '梧棲區', '清水區', '大甲區', '外埔區', '大安區'], ['400', '401', '402', '403', '404', '406', '407', '408', '411', '412', '413', '414', '420', '421', '422', '423', '424', '426', '427', '428', '429', '432', '433', '434', '435', '436', '437', '438', '439']],
            // 彰化縣
            [['彰化市', '芬園鄉', '花壇鄉', '秀水鄉', '鹿港鎮', '福興鄉', '線西鄉', '和美鎮', '伸港鄉', '員林市', '社頭鄉', '永靖鄉', '埔心鄉', '溪湖鎮', '大村鄉', '埔鹽鄉', '田中鎮', '北斗鎮', '田尾鄉', '埤頭鄉', '溪州鄉', '竹塘鄉', '二林鎮', '大城鄉', '芳苑鄉', '二水鄉'], ['500', '502', '503', '504', '505', '506', '507', '508', '509', '510', '511', '512', '513', '514', '515', '516', '520', '521', '522', '523', '524', '525', '526', '527', '528', '530']],
            // 南投縣
            [['南投市', '中寮鄉', '草屯鎮', '國姓鄉', '埔里鎮', '仁愛鄉', '名間鄉', '集集鎮', '水里鄉', '魚池鄉', '信義鄉', '竹山鎮', '鹿谷鄉'], ['540', '541', '542', '544', '545', '546', '551', '552', '553', '555', '556', '557', '558']],
            // 嘉義市
            [['東區', '西區'], ['600', '600']],
            // 嘉義縣
            [['番路鄉', '梅山鄉', '竹崎鄉', '阿里山', '中埔鄉', '大埔鄉', '水上鄉', '鹿草鄉', '太保市', '朴子市', '東石鄉', '六腳鄉', '新港鄉', '民雄鄉', '大林鎮', '溪口鄉', '義竹鄉', '布袋鎮'], ['602', '603', '604', '605', '606', '607', '608', '611', '612', '613', '614', '615', '616', '621', '622', '623', '624', '625']],
            // 雲林縣
            [['斗南鎮', '大埤鄉', '虎尾鎮', '土庫鎮', '褒忠鄉', '東勢鄉', '臺西鄉', '崙背鄉', '麥寮鄉', '斗六市', '林內鄉', '古坑鄉', '莿桐鄉', '西螺鎮', '二崙鄉', '北港鎮', '水林鄉', '口湖鄉', '四湖鄉', '元長鄉'], ['630', '631', '632', '633', '634', '635', '636', '637', '638', '640', '643', '646', '647', '648', '649', '651', '652', '653', '654', '655']],
            // 臺南市
            [['中西區', '東區', '南區', '北區', '安平區', '安南區', '永康區', '歸仁區', '新化區', '左鎮區', '玉井區', '楠西區', '南化區', '仁德區', '關廟區', '龍崎區', '官田區', '麻豆區', '佳里區', '西港區', '七股區', '將軍區', '學甲區', '北門區', '新營區', '後壁區', '白河區', '東山區', '六甲區', '下營區', '柳營區', '鹽水區', '善化區', '大內區', '山上區', '新市區', '安定區'], ['700', '701', '702', '704', '708', '709', '710', '711', '712', '713', '714', '715', '716', '717', '718', '719', '720', '721', '722', '723', '724', '725', '726', '727', '730', '731', '732', '733', '734', '735', '736', '737', '741', '742', '743', '744', '745']],
            // 高雄市
            [['新興區', '前金區', '苓雅區', '鹽埕區', '鼓山區', '旗津區', '前鎮區', '三民區', '楠梓區', '小港區', '左營區', '仁武區', '大社區', '東沙群島', '南沙群島', '岡山區', '路竹區', '阿蓮區', '田寮區', '燕巢區', '橋頭區', '梓官區', '彌陀區', '永安區', '湖內區', '鳳山市', '大寮區', '林園區', '鳥松區', '大樹區', '旗山區', '美濃區', '六龜區', '內門區', '杉林區', '甲仙區', '桃源區', '那瑪夏區', '茂林區', '茄萣區'], ['800', '801', '802', '803', '804', '805', '806', '807', '811', '812', '813', '814', '815', '817', '819', '820', '821', '822', '823', '824', '825', '826', '827', '828', '829', '830', '831', '832', '833', '840', '842', '843', '844', '845', '846', '847', '848', '849', '851', '852']],
            // 澎湖縣
            [['馬公市', '西嶼鄉', '望安鄉', '七美鄉', '白沙鄉', '湖西鄉'], ['880', '881', '882', '883', '884', '885']],
            // 金門縣
            [['金沙鎮', '金湖鎮', '金寧鄉', '金城鎮', '烈嶼鄉', '烏坵鄉'], ['890', '891', '892', '893', '894', '896']],
            // 屏東縣
            [['屏東市', '三地門鄉', '霧臺鄉', '瑪家鄉', '九如鄉', '里港鄉', '高樹鄉', '鹽埔鄉', '長治鄉', '麟洛鄉', '竹田鄉', '內埔鄉', '萬丹鄉', '潮州鎮', '泰武鄉', '來義鄉', '萬巒鄉', '崁頂鄉', '新埤鄉', '南州鄉', '林邊鄉', '東港鎮', '琉球鄉', '佳冬鄉', '新園鄉', '枋寮鄉', '枋山鄉', '春日鄉', '獅子鄉', '車城鄉', '牡丹鄉', '恆春鎮', '滿州鄉'], ['900', '901', '902', '903', '904', '905', '906', '907', '908', '909', '911', '912', '913', '920', '921', '922', '923', '924', '925', '926', '927', '928', '929', '931', '932', '940', '941', '942', '943', '944', '945', '946', '947']],
            // 臺東縣
            [['臺東市', '綠島鄉', '蘭嶼鄉', '延平鄉', '卑南鄉', '鹿野鄉', '關山鎮', '海端鄉', '池上鄉', '東河鄉', '成功鎮', '長濱鄉', '太麻里', '金峰鄉', '大武鄉', '達仁鄉'], ['950', '951', '952', '953', '954', '955', '956', '957', '958', '959', '961', '962', '963', '964', '965', '966']],
            // 花蓮縣
            [['花蓮市', '新城鄉', '秀林鄉', '吉安鄉', '壽豐鄉', '鳳林鎮', '光復鄉', '豐濱鄉', '瑞穗鄉', '萬榮鄉', '玉里鎮', '卓溪鄉', '富里鄉'], ['970', '971', '972', '973', '974', '975', '976', '977', '978', '979', '981', '982', '983']],
            // 連江縣
            [['南竿鄉', '北竿鄉', '莒光鄉', '東引鄉'], ['209', '210', '211', '212']]]
    };

    function handleOptions() {
        // Check options required
        if (arguments[1]) {
            getOptionsRequired(arguments[0], arguments[1]);
        }

        // Extend options
        return getOptionsExtend(arguments[0], arguments[2]);
    }

    function getOptionsRequired(optionsCustom, optionsRequired) {
        var error = '';
        var length = optionsRequired.length;
        optionsCustom = optionsCustom || {};

        while (length--) {
            if (!optionsCustom.hasOwnProperty(optionsRequired[length])) error += optionsRequired[length] + ',';
        }

        if (error) throw '缺少參數: ' + error;
    }

    function getOptionsExtend(optionsCustom, optionsDefault) {
        if (!optionsCustom) {
            return optionsDefault;
        }

        var property;
        for (property in optionsCustom) {
            optionsDefault[property] = optionsCustom[property];
        }

        if (optionsCustom['elCountry']) {
            // 拼字錯誤修正
            optionsDefault['elCounty'] = optionsCustom['elCountry'];
        }

        if (optionsCustom['selectedCountry']) {
            // 拼字錯誤修正
            optionsDefault['selectedCounty'] = optionsCustom['selectedCountry'];
        }

        if (optionsCustom['countryClassName']) {
            // 拼字錯誤修正
            optionsDefault['countyClassName'] = optionsCustom['countryClassName'];
        }

        if (optionsCustom['countryFiledName']) {
            // 拼字錯誤修正
            optionsDefault['countyFiledName'] = optionsCustom['countryFiledName'];
        }

        return optionsDefault;
    }

// --------------------
// Module import
// --------------------

// module.exports = TwCitySelector; /* use browserify to build */


// --------------------
// Constructor
// --------------------
    function TwCitySelector$1() {

        this.elRoleName = 'tw-city-selector';

        // Setting options
        var optionsDefault = {
            el: null,
            elCounty: null,
            elDistrict: null,
            elZipcode: null,
            selectedCounty: null, // 預設選擇的縣市名稱
            selectedDistrict: null, // 預設選擇的區域名稱
            only: null, // {array} 限制顯示哪些縣市 (下個版本棄用)
            onlyCity: null, // {array} 限制顯示哪些縣市
            onlyDistrict: null, // {array} 限制顯示那些地區
            showZipcode: false, // {boolean} 是否顯示郵遞區號欄位
            bootstrapStyle: false,
            countyClassName: 'county',
            countyFiledName: 'county',
            districtClassName: 'district',
            districtFieldName: 'district',
            zipcodeClassName: 'zipcode',
            zipcodeFieldName: 'zipcode'
        };

        var optionsCustom = arguments[0];
        var optionsRequired = arguments.length ? ['el'] : null; // 設置必要參數，若無帶入任何參數則設不設置
        this.options = handleOptions(optionsCustom, optionsRequired, optionsDefault);

        // Setup
        elSetup.call(this);

        // return this;
    }

// --------------------
// Public Methods
// --------------------
// TwCitySelector.prototype.init = function() {
// 	return init.call(this);
// };

    TwCitySelector$1.prototype.reset = function () {
        return resetSelectors.call(this);
    };

// --------------------
// Private Methods
// --------------------
    function elSetup() {
        // 有指定 element 的初始化
        if (this.options.el) {
            this.el = getElement(this.options.el);
            this.elCounty = getElement(this.options.elCounty, this.el);
            this.elDistrict = getElement(this.options.elDistrict, this.el);
            this.elZipcode = getElement(this.options.elZipcode, this.el);

            return init.call(this);
        }

        // 無指定 element 的初始化，使用 role-attribute element 作為預設 elements
        var els = document.querySelectorAll('[role=' + this.elRoleName + ']');
        Array.prototype.forEach.call(els, function (el) {
            var self = JSON.parse(JSON.stringify(this)); // clone object，因 object 為參考

            // 重置設定
            self.el = el;
            self.elCounty = null;
            self.elDistrict = null;
            self.elZipcode = null;

            // 限制顯示哪些縣市 (下個版本棄用)
            self.options.only = el.getAttribute('data-only') ? el.getAttribute('data-only').replace(/\s/g, '').split(',') // 去除空白字元，轉陣列
                : null;

            // 限制顯示哪些縣市
            self.options.onlyCity = el.getAttribute('data-only-city') ? el.getAttribute('data-only-city').replace(/\s/g, '').split(',') // 去除空白字元，轉陣列
                : null;

            // 限制顯示哪些縣市
            self.options.onlyDistrict = el.getAttribute('data-only-district') ? el.getAttribute('data-only-district').replace(/\s/g, '').split(',') // 去除空白字元，轉陣列
                : null;

            // 預設選擇的縣市
            self.options.selectedCounty = el.getAttribute('data-selected-county') || el.getAttribute('data-selected-country'); // 拼字錯誤

            // 預設選擇的區域
            self.options.selectedDistrict = el.getAttribute('data-selected-district');

            // 是否使用 bootstrap 樣式
            self.options.bootstrapStyle = el.getAttribute('data-bootstrap-style') != null;

            // 是否顯示郵遞區號
            self.options.showZipcode = el.getAttribute('data-show-zipcode') != null;

            return init.call(self);
        }, this);

        return els;
    }

    function init() {
        setElements.call(this);

        // 監聽選單動作
        listenCountyChanged.call(this);
        listenDistrictChanged.call(this);

        // 設定預設選定的縣市
        setSelectedItem.call(this);

        // bootstrap 樣式套入
        if (this.options.bootstrapStyle) {
            setBootstrapStyle.call(this);
        }

        return this;
    }

    function getElement(el, parent) {
        if (!el) return null;
        if (parent) return parent.querySelector(el);
        return document.querySelector(el);
    }

    function setElements() {
        var fragment = document.createDocumentFragment();

        // 縣市選單
        if (!this.elCounty) {
            var county = document.createElement('select');
            this.elCounty = county;
            fragment.appendChild(county);
        }

        // 縣市選單屬性
        this.elCounty.innerHTML = getCountyOptions.call(this);
        this.elCounty.setAttribute('class', this.options.countyClassName);
        this.elCounty.name = this.options.countyFiledName;

        // 區域選單
        if (!this.elDistrict) {
            var district = document.createElement('select');
            this.elDistrict = district;
            fragment.appendChild(district);
        }

        // 區域選單屬性
        this.elDistrict.innerHTML = getDistrictOptions();
        this.elDistrict.setAttribute('class', this.options.districtClassName);
        this.elDistrict.name = this.options.districtFieldName;

        // 郵遞區號
        // if (!this.elZipcode) {
        //     var zipcode = document.createElement('input');
        //     this.elZipcode = zipcode;
        //     fragment.appendChild(zipcode);
        //
        //     // 郵遞區號屬性設定
        //     this.elZipcode.style.display = this.options.showZipcode || 'none';
        //     this.elZipcode.style.width = '6em';
        //     this.elZipcode.readOnly = true;
        //     this.elZipcode.type = 'text';
        //     this.elZipcode.placeholder = '郵遞區號';
        //     this.elZipcode.name = this.options.zipcodeFieldName;
        //     this.elZipcode.setAttribute('class', this.options.zipcodeClassName);
        //     this.elZipcode.autocomplete = 'off';
        // }

        // element 片段塞入 el
        this.el.appendChild(fragment);
    }

    function getCountyOptions() {
        var elOptions = '<option value="">選擇縣市</option>';
        var onlyCity = this.options.only || this.options.onlyCity; // this.options.only 下個版本棄用

        for (var i = 0, j = data$1.counties.length; i < j; i++) {
            // 若有設定限制顯示的縣市，且該項目不在自訂縣市中
            if (onlyCity && Array.isArray(onlyCity) && onlyCity.indexOf(data$1.counties[i]) === -1) {
                continue;
            }
            elOptions += '<option value="' + data$1.counties[i] + '" data-index="' + i + '">' + data$1.counties[i] + '</option>';
        }

        return elOptions;
    }

    function getDistrictOptions(index,district) {
        if (!index) {
            return '<option value="" selected>---</option>';
        }
        var elOptions = '<option value="" selected>選擇區域</option>';
        if(Array.isArray(district) && district.length > 0)
        {
            var district_search = district.map(function (value) {
                return value.slice(3);
            })
            for (var i = 0, j = data$1.districts[index][0].length - 1; i <= j; i++) {
                var district_check = district_search.indexOf(data$1.districts[index][0][i]);
                var county_check = district.indexOf(data$1.counties[index]+data$1.districts[index][0][i])
                if ((district_search && Array.isArray(district_search) && district_check === -1) || county_check === -1) {
                    continue;
                }
                elOptions += '<option value="' + data$1.districts[index][0][i] + '"\n                            data-zipcode="' + data$1.districts[index][1][i] + '">\n\t\t                ' + data$1.districts[index][0][i] + '\n\t\t            </option>';
            }
        }
        else
        {
            for (var i = 0, j = data$1.districts[index][0].length - 1; i <= j; i++) {
                elOptions += '<option value="' + data$1.districts[index][0][i] + '"\n                            data-zipcode="' + data$1.districts[index][1][i] + '">\n\t\t                ' + data$1.districts[index][0][i] + '\n\t\t            </option>';
            }
        }
        return elOptions;
    }

    function listenCountyChanged() {
        var handler = function () {
            var index = this.elCounty.querySelector('option:checked').dataset.index;
            this.elDistrict.innerHTML = getDistrictOptions(index,this.options.onlyDistrict);
            // this.elZipcode.value = '';
        }.bind(this);

        this.elCounty.addEventListener('change', handler);
    }

    function listenDistrictChanged() {
        var handler = function () {
            var zipcode = this.elDistrict.querySelector('option:checked').dataset.zipcode || '';
            // this.elZipcode.value = zipcode;
        }.bind(this);

        this.elDistrict.addEventListener('change', handler);
    }

    function setSelectedItem() {
        if (this.options.selectedCounty) {
            var event = document.createEvent('Event');
            event.initEvent('change', true, true);

            this.elCounty.value = this.options.selectedCounty;
            this.elCounty.dispatchEvent(event);
        }

        if (this.options.selectedDistrict) {
            this.elDistrict.value = this.options.selectedDistrict;
            this.elDistrict.dispatchEvent(event);
        }
    }

    function resetSelectors() {
        this.elCounty.selectedIndex = 0;
        this.elDistrict.innerHTML = getDistrictOptions();
        this.elZipcode.value = '';

        return this;
    }

    function setBootstrapStyle() {
        var fieldClassName = 'form-control';
        var wrapperClassName = 'form-group';
        var fragment = document.createDocumentFragment();

        this.elCounty.setAttribute('class', fieldClassName);
        this.elDistrict.setAttribute('class', fieldClassName);
        this.elZipcode.setAttribute('class', fieldClassName);

        var wrapper = document.createElement('div');
        wrapper.setAttribute('class', wrapperClassName);

        var elCounty = wrapper.cloneNode();
        elCounty.appendChild(this.elCounty);
        fragment.appendChild(elCounty);

        var elDistrict = wrapper.cloneNode();
        elDistrict.appendChild(this.elDistrict);
        fragment.appendChild(elDistrict);

        var elZipcode = wrapper.cloneNode();
        elZipcode.appendChild(this.elZipcode);
        fragment.appendChild(elZipcode);

        this.el.appendChild(fragment);
    }

    return TwCitySelector$1;

})));
