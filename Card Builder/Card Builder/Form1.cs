using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using Newtonsoft.Json;

namespace Card_Builder
{
    public partial class Form1 : Form
    {
        Card card = new Card();
        public Form1()
        {
            InitializeComponent();
            if (CB_Power.Items.Count > 0) { CB_Power.SelectedItem = CB_Power.Items[1]; }
            if (CB_Toughness.Items.Count > 0) { CB_Toughness.SelectedItem = CB_Toughness.Items[1]; }
        }

        private void button1_Click(object sender, EventArgs e)
        {
            string output = JsonConvert.SerializeObject(card);
        }

        private void textBox1_TextChanged(object sender, EventArgs e)
        {
            card.name = TB_NAME.Text;
        }

        private void label3_Click(object sender, EventArgs e)
        {

        }

        private void comboBox1_SelectedIndexChanged(object sender, EventArgs e)
        {

        }
    }
}
