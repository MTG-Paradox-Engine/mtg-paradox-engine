namespace Card_Builder
{
    partial class Form1
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.Build_Button = new System.Windows.Forms.Button();
            this.TB_NAME = new System.Windows.Forms.TextBox();
            this.label1 = new System.Windows.Forms.Label();
            this.label2 = new System.Windows.Forms.Label();
            this.CB_Power = new System.Windows.Forms.ComboBox();
            this.CB_Toughness = new System.Windows.Forms.ComboBox();
            this.label3 = new System.Windows.Forms.Label();
            this.SuspendLayout();
            // 
            // Build_Button
            // 
            this.Build_Button.Location = new System.Drawing.Point(713, 415);
            this.Build_Button.Name = "Build_Button";
            this.Build_Button.Size = new System.Drawing.Size(75, 23);
            this.Build_Button.TabIndex = 0;
            this.Build_Button.Text = "Build";
            this.Build_Button.UseVisualStyleBackColor = true;
            this.Build_Button.Click += new System.EventHandler(this.button1_Click);
            // 
            // TB_NAME
            // 
            this.TB_NAME.Location = new System.Drawing.Point(104, 12);
            this.TB_NAME.Name = "TB_NAME";
            this.TB_NAME.Size = new System.Drawing.Size(100, 20);
            this.TB_NAME.TabIndex = 1;
            this.TB_NAME.Text = "<Name>";
            this.TB_NAME.TextChanged += new System.EventHandler(this.textBox1_TextChanged);
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Location = new System.Drawing.Point(38, 15);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(60, 13);
            this.label1.TabIndex = 2;
            this.label1.Text = "Card Name";
            // 
            // label2
            // 
            this.label2.AutoSize = true;
            this.label2.Location = new System.Drawing.Point(61, 200);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(37, 13);
            this.label2.TabIndex = 3;
            this.label2.Text = "Power";
            // 
            // CB_Power
            // 
            this.CB_Power.DisplayMember = "1";
            this.CB_Power.FormattingEnabled = true;
            this.CB_Power.Items.AddRange(new object[] {
            "0",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "11",
            "12",
            "13",
            "14",
            "15",
            "16",
            "17",
            "18",
            "19",
            "20",
            "*"});
            this.CB_Power.Location = new System.Drawing.Point(104, 197);
            this.CB_Power.Name = "CB_Power";
            this.CB_Power.Size = new System.Drawing.Size(100, 21);
            this.CB_Power.TabIndex = 4;
            // 
            // CB_Toughness
            // 
            this.CB_Toughness.FormattingEnabled = true;
            this.CB_Toughness.Items.AddRange(new object[] {
            "0",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "11",
            "12",
            "13",
            "14",
            "15",
            "16",
            "17",
            "18",
            "19",
            "20",
            "*"});
            this.CB_Toughness.Location = new System.Drawing.Point(104, 224);
            this.CB_Toughness.Name = "CB_Toughness";
            this.CB_Toughness.Size = new System.Drawing.Size(100, 21);
            this.CB_Toughness.TabIndex = 6;
            this.CB_Toughness.SelectedIndexChanged += new System.EventHandler(this.comboBox1_SelectedIndexChanged);
            // 
            // label3
            // 
            this.label3.AutoSize = true;
            this.label3.Location = new System.Drawing.Point(38, 227);
            this.label3.Name = "label3";
            this.label3.Size = new System.Drawing.Size(60, 13);
            this.label3.TabIndex = 5;
            this.label3.Text = "Toughness";
            this.label3.Click += new System.EventHandler(this.label3_Click);
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(800, 450);
            this.Controls.Add(this.CB_Toughness);
            this.Controls.Add(this.label3);
            this.Controls.Add(this.CB_Power);
            this.Controls.Add(this.label2);
            this.Controls.Add(this.label1);
            this.Controls.Add(this.TB_NAME);
            this.Controls.Add(this.Build_Button);
            this.Name = "Form1";
            this.Text = "Form1";
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Button Build_Button;
        private System.Windows.Forms.TextBox TB_NAME;
        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.Label label2;
        private System.Windows.Forms.ComboBox CB_Power;
        private System.Windows.Forms.ComboBox CB_Toughness;
        private System.Windows.Forms.Label label3;
    }
}

