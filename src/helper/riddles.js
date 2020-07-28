const getRiddle = (userCTX, { id, addUserAnswer }) => {
  const defaultRiddle = {
    setup: { startCode: "" },
    check: { testFn: () => () => null },
  };

  // This is where the magic happens
  const allRiddle = {
    "1": {
      setup: {
        arg: { name: `${userCTX.userName}` },
        fnName: "greet",
        startCode: `
    function greet(person) {
      if (person.name ==  "${userCTX.userName}"  ) {
        return "hey ${userCTX.userName}";
      } else {
        return "hey stranger";
      }
    }
          `,
      },
      check: {
        testFn: (log, error) => (result) => {
          if (result === `hey ${userCTX.userName}`) {
            log("Yes");
            addUserAnswer(1);
          } else {
            error("No");
          }
        },
      },
    },
    "2": {
      setup: {
        arg: "let me out!",
        fnName: "textToBinary",
        startCode: `
    function textToBinary(string) {
      return string.split('').map(function (char) { 
        return char.charCodeAt(0).toString(2); })
      .join(' ');
        
    }
          `,
      },
      check: {
        testFn: (log, error) => (result) => {
          if (
            result ===
            `1101100 1100101 1110100 100000 1101101 1100101 100000 1101111 1110101 1110100 100001`
          ) {
            log("Yes");
            addUserAnswer(2);
          } else {
            error("No");
          }
        },
      },
    },
    "3": {
      setup: {
        arg: "isThisUnique?",
        fnName: "uniqueCharacters",
        startCode: `
    function uniqueCharacters(word) {
      const objectOfLetters = word.split("").reduce((acc, cur) => {
        if (acc[cur]) {
          acc[cur] += 1;
        } else {
          acc[cur] = 1;
        }    return acc;
      }, {});
    const result = Object.values(objectOfLetters).filter((x) => x > 1);  
     return result.length === 0 ? true : false;
    }
          `,
      },
      check: {
        testFn: (log, error) => (result) => {
          if (result === false) {
            log("Yes");
            addUserAnswer(3);
          } else {
            error("No");
          }
        },
      },
    },
    "4": {
      setup: {
        arg:
          "epqqwdwuyku_vtqttjeqqivhyvl_ugwgtmkwguu_uk_gtvkhukgvedpmuqyupxpvvpuxkwptgjmdzuu_ljytuuuvtvxvuulip_qi_vlxqmg_ietpmlvxvvudipem_jldvmkglvliekdkjwkdlgjk_vxjykgulevgqmvqlfpteqglmvpullglipyhlljevvefwvjpviqulvieg_hulwqvyijkxdufuxflewkphmvkfijtltvwd_qitlv_ypqjytylwyzqdjpxlpvymldvipdmmtivqwiluumyfmmjyvveuvu_pykdgfkpydgkvtud_vvjgm_qjjmdgpwueldjpgvdxgqmtjdjjgmvwletgjiffkvvlpyydkyxvvvfijuguvpgx_vdgtpwvd_jpvklkvqjhylpmjtgtuylyfujdhkvmgh_ixfzwtpqltiffyvgutjji_gquilmytdqfy_xgxqqdpdtmzh_ywwimldxufxjpyxltjkegwgxtekpteekpulkugvmffgtutgivywuwqxeuvltvvpzfjmgtvvytpye_zgpvlgilvd_ixfiytkip_uvtppz_dw_vdpkufzdxul_vgfmgjviigtiyhljggvjqxzmqfpze_hqh_yugggilkuzgxhmeiliptexvvmhudlegmiffieuhyzd_m_qxkufvvxykddpxefim_gqpqivuxvtwuilwqvum_mgejjpymm_mqukgvumzmqfftmixtyumjfwgkvefuekwgjpjqge_tjtutzltiygikwiumvvgtlqgqqkkgegtuvfutgpvxgpzxp_vyjvwwfuvtvtwlgmvpxghgupxxgzyhhhhhuuihhhvujpihhhqykhhhhtivhhhdvxhhhhidhhhh_vthuyhqdduyiypiiiqlvgpvexhvguvvimsuelfhxiuipiveeixghgvjyfmhiiewpi_y_uihieduv_hfhetemipfg_pkfjpuwgquevhihzyuthuehuhfhuggzugh_zpgyhhhqtuuggguhudhhhqkpdhhgqvkeetzfpkj_fm_igw_letughudliu_htvzhiyvhvvhvghutimhtuhkhfdjzhudjwkhlh_gvzmthwiiqix_hggfuvtxlh_hlhxwhhhhvuttiiiyyhuuvuhihxftuhuhvqvuuuuhjlheiildutmqewvyjeukluuvglmplqdhuvtfuuddleuwttdl_litlzhtgffdllmyvtyl_dfwhtleiutiugjihfvhetgwttldvqqlhvlqmiiyqtkl_zg_f_wtlpytdqdpgdfvfewlljgvmgxyxpw_xiwxglieltdqgmtuuvvjmmuluuywmqqgkmmtgtflvl_lgktdkwp_fkxh_vfuufyfuufqhqxeixtlitiqgpguutvkuqtwyhxltfktlewmexlujgwyfgelxtfluugdlftutgvwlvvgyvtgjxlv_vvwftfuiu_xvvetuilmieh_ugjxpikilluudipuqxtvejutiiliuivge_fvjjuyqdkjiel_mkivuzzwxudjhvpmdivmttuktwqlevtel_u_hmzmxx_kd_vktmlhlz_fxwfdeqhfklzxiwmdlzfllxhhxkwehetilgkpxfpeevhl_whhethigteqdvvxhpi__ujh_yxigmfkumdwiyp_ktlvimfw_idfeiugjzxvquigdfxxjgqulfkgkkkhjuvlhtfg_itpumezqlhvyjymwgdeizigvglgguhk_wwdtyuuyvuplmgydw_xwg_fklgguiip_wlivjigdpwwxxuuvwkmmugfegituikhxqlvqthhjfjuhjwwhydfeythujtfqgqyjumcfpehjmcupvupliudlltuluvlpil__dxleavidldviuvjjjedkulaw_glilvuivmqllualvpgzjfquu_ve_mgfjutfvfiv_iuik_ldzukglilzfqjpljwiujwmlzyldi_tiqiufbdgmi_tvhiksyvmzdigwdldzfmekeemvthz_xz",
        fnName: "extractHint",
        startCode: `
    function extractHint(message) {
      let letterWithFreq = {};
      message.split("").forEach((char) => {
      
      if (letterWithFreq[char]) {
      letterWithFreq[char] = letterWithFreq[char] + 1;
      } else {
      letterWithFreq[char] = 1;
      }
      });
      
      let keysSorted = Object.keys(letterWithFreq).sort(function (a, b) {
      return letterWithFreq[b] - letterWithFreq[a];
      });
      
      let indexOfDash = keysSorted.indexOf("_");
      
      let result = keysSorted.slice(0, indexOfDash).join("");
      
      return result;
      
    }
          `,
      },
      check: {
        testFn: (log, error) => (result) => {
          if (result === `uvlight`) {
            log("UV LIGHT");
            addUserAnswer(4);
          } else {
            error("No");
          }
        },
      },
    },
    "5": {
      setup: {
        arg: ["A8", "B8"],
        fnName: "canCapture",
        startCode: `
    function canCapture([yourShip, opponentsShip]) {
      let toArr1 = Array.from(yourShip);
      let toArr2 = Array.from(opponentsShip);
     return ((toArr1[0] === toArr2[0]) || (toArr1[1] === toArr2[1]));
    }
          `,
      },
      check: {
        testFn: (log, error) => (result) => {
          if (result === true) {
            log("Yes");
            addUserAnswer(5);
          } else {
            error("No");
          }
        },
      },
    },
    "6": {
      setup: {
        arg: "12345",
        fnName: "writeCode",
        startCode: `
    function writeCode(code) {
      let yourCode = 
      return yourCode == code;
    }
          `,
      },
      check: {
        testFn: (log, error) => (result) => {
          if (result === true) {
            log("Yes");
            addUserAnswer(6);
          } else {
            error("No");
          }
        },
      },
    },
  };

  return allRiddle[id] || defaultRiddle;
};

export default getRiddle;
